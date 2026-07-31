(function () {
  const labels = {
    zh: {
      all: '全部',
      year: '年份',
      type: '类型',
      keyword: '关键词',
      journal: '期刊',
      conference: '会议',
      search: '搜索论文、期刊或关键词',
      cite: '引用',
      copied: '已复制',
      failed: '无法加载引用信息',
      details: '论文详情',
      close: '关闭',
      copy: '复制',
      download: '下载 BibTeX',
      noResults: '暂无匹配论文',
      keywords: {
        multimodal: '多模态融合',
        mobility: '移动出行',
        'remote-sensing': '遥感与地理AI',
        'urban-representation': '城市表征',
        'social-computing': '社会计算',
        spatiotemporal: '时空建模',
      },
    },
    en: {
      all: 'All',
      year: 'Year',
      type: 'Type',
      keyword: 'Keywords',
      journal: 'Journal',
      conference: 'Conference',
      search: 'Search title, venue, or keyword',
      cite: 'Cite',
      copied: 'Copied',
      failed: 'Citation unavailable',
      details: 'Details',
      close: 'Close',
      copy: 'Copy',
      download: 'Download BibTeX',
      noResults: 'No matching publications',
      keywords: {
        multimodal: 'Multimodal Fusion',
        mobility: 'Mobility',
        'remote-sensing': 'Remote Sensing & GeoAI',
        'urban-representation': 'Urban Representation',
        'social-computing': 'Social Computing',
        spatiotemporal: 'Spatio-temporal Modeling',
      },
    },
  };

  const dataCache = new Map();
  const citationStore = new Map();
  let currentBib = '';
  let citeModal = null;

  const escapeHtml = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));

  const getLabels = (lang) => labels[lang] || labels.en;

  const loadPublications = async (source, lang) => {
    if (!dataCache.has(source)) {
      dataCache.set(source, fetch(source).then((res) => {
        if (!res.ok) throw new Error(`Unable to load ${source}`);
        return res.json();
      }));
    }
    const data = await dataCache.get(source);
    const legacyKey = lang === 'zh' ? 'ai4cityPubDataZh' : 'ai4cityPubDataEn';
    window[legacyKey] = data;
    data.forEach((pub) => citationStore.set(pub.slug, pub.citation || ''));
    return data;
  };

  const visualHtml = (visual) => {
    if (visual === 'urbanmmcl') {
      return '<span class="modality satellite"></span><span class="modality street"></span><span class="modality poi"></span><span class="modality text"></span><span class="fusion-line"></span><span class="embedding-node"></span>';
    }
    if (visual === 'sat2flow') {
      return '<span class="sat-cell"></span><span class="sat-cell"></span><span class="sat-cell accent"></span><span class="sat-cell"></span><span class="flow-arrow"></span><span class="flow-bar one"></span><span class="flow-bar two"></span><span class="flow-bar three"></span>';
    }
    return '<span class="generic-node one"></span><span class="generic-node two"></span><span class="generic-node three"></span><span class="generic-line one"></span><span class="generic-line two"></span>';
  };

  const visualClass = (visual) => {
    if (visual === 'urbanmmcl') return 'urbanmmcl-visual';
    if (visual === 'sat2flow') return 'sat2flow-visual';
    return 'generic-paper-visual';
  };

  const normalizeDoi = (doi) => doi ? doi.replace(/^https?:\/\/doi\.org\//, '') : '';

  const publicationUrl = (pub, lang) => `${lang === 'en' ? '/en' : ''}/publication/${encodeURIComponent(pub.slug)}/`;

  const buildSearchText = (pub, text) => [
    pub.title,
    pub.venue,
    pub.abstract,
    pub.year,
    text[pub.type],
    ...(pub.tags || []).map((tag) => text.keywords[tag] || tag),
  ].join(' ').toLowerCase();

  const renderTabs = (group, options, activeValue) => `
    <div class="ai4city-pub-tabs">
      ${options.map((option) => `<button type="button" class="${option.value === activeValue ? 'active' : ''}" data-filter-group="${group}" data-filter-value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</button>`).join('')}
    </div>`;

  const renderPubItem = (pub, text) => {
    const tags = [pub.type, `y${pub.year}`, ...(pub.tags || [])].join(' ');
    const actions = [
      `<button type="button" data-cite-key="${escapeHtml(pub.slug)}">${text.cite}</button>`,
      pub.doi ? `<a href="${escapeHtml(pub.doi)}">DOI</a>` : '',
      pub.code ? `<a href="${escapeHtml(pub.code)}">Code</a>` : '',
    ].filter(Boolean).join('');

    return `
      <article class="ai4city-pub-item" data-tags="${escapeHtml(tags)}" data-search="${escapeHtml(buildSearchText(pub, text))}">
        <div class="ai4city-pub-year">${escapeHtml(pub.year)}<span>${escapeHtml(text[pub.type] || pub.type)}</span></div>
        <div class="ai4city-pub-main">
          <h3>${escapeHtml(pub.title)}</h3>
          <p class="ai4city-pub-abstract">${escapeHtml(pub.abstract)}</p>
          <p class="ai4city-pub-venue">${escapeHtml(pub.venue)}</p>
          <div class="ai4city-pub-actions">${actions}</div>
        </div>
      </article>`;
  };

  const renderPublicationList = async (root) => {
    const lang = root.dataset.lang || 'en';
    const text = getLabels(lang);
    const data = await loadPublications(root.dataset.source, lang);
    const years = [...new Set(data.map((pub) => pub.year))].sort((a, b) => b - a);
    const usedKeywords = [...new Set(data.flatMap((pub) => pub.tags || []))]
      .filter((tag) => text.keywords[tag])
      .sort((a, b) => text.keywords[a].localeCompare(text.keywords[b], lang === 'zh' ? 'zh-Hans-CN' : 'en'));

    root.innerHTML = `
      <div class="ai4city-pub-toolbar">
        <div class="ai4city-pub-filter-groups">
          <div class="ai4city-pub-filter-group"><span>${text.year}</span>${renderTabs('year', [{ value: 'all', label: text.all }, ...years.map((year) => ({ value: `y${year}`, label: year }))], 'all')}</div>
          <div class="ai4city-pub-filter-group"><span>${text.type}</span>${renderTabs('type', [{ value: 'all', label: text.all }, { value: 'journal', label: text.journal }, { value: 'conference', label: text.conference }], 'all')}</div>
          <div class="ai4city-pub-filter-group"><span>${text.keyword}</span>${renderTabs('topic', [{ value: 'all', label: text.all }, ...usedKeywords.map((tag) => ({ value: tag, label: text.keywords[tag] }))], 'all')}</div>
        </div>
        <input type="search" data-pub-search placeholder="${escapeHtml(text.search)}">
      </div>
      <div class="ai4city-pub-list">${data.map((pub) => renderPubItem(pub, text)).join('')}</div>
      <p class="ai4city-pub-empty" data-pub-empty hidden>${escapeHtml(text.noResults)}</p>`;

    const buttons = Array.from(root.querySelectorAll('[data-filter-group]'));
    const search = root.querySelector('[data-pub-search]');
    const items = Array.from(root.querySelectorAll('.ai4city-pub-item'));
    const empty = root.querySelector('[data-pub-empty]');
    const active = { year: 'all', type: 'all', topic: 'all' };

    const apply = () => {
      const query = (search.value || '').trim().toLowerCase();
      let visibleCount = 0;
      items.forEach((item) => {
        const tags = (item.dataset.tags || '').split(' ');
        const tagMatch = Object.values(active).every((value) => value === 'all' || tags.includes(value));
        const textMatch = !query || (item.dataset.search || '').includes(query);
        const isVisible = tagMatch && textMatch;
        item.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });
      empty.hidden = visibleCount > 0;
    };

    buttons.forEach((button) => button.addEventListener('click', () => {
      const group = button.dataset.filterGroup;
      active[group] = button.dataset.filterValue;
      buttons
        .filter((btn) => btn.dataset.filterGroup === group)
        .forEach((btn) => btn.classList.toggle('active', btn === button));
      apply();
    }));
    search.addEventListener('input', apply);
  };

  const renderFeatured = async (root) => {
    const lang = root.dataset.lang || 'en';
    const text = getLabels(lang);
    const data = await loadPublications(root.dataset.source, lang);
    const slugs = (root.dataset.featuredSlugs || '').split(/\s+/).filter(Boolean);
    const selected = slugs.map((slug) => data.find((pub) => pub.slug === slug)).filter(Boolean);

    root.innerHTML = selected.map((pub) => {
      const doi = normalizeDoi(pub.doi);
      const detailUrl = publicationUrl(pub, lang);
      const actions = [
        `<a href="${escapeHtml(detailUrl)}">${text.details}</a>`,
        `<button type="button" data-cite-key="${escapeHtml(pub.slug)}">${text.cite}</button>`,
        pub.doi ? `<a href="${escapeHtml(pub.doi)}">DOI</a>` : '',
        pub.code ? `<a href="${escapeHtml(pub.code)}">Code</a>` : '',
      ].filter(Boolean).join('');

      return `
        <article class="ai4city-feature-paper">
          <div class="ai4city-paper-visual ${visualClass(pub.visual)}" aria-hidden="true">${visualHtml(pub.visual)}</div>
          <div class="ai4city-paper-copy">
            <span class="ai4city-paper-tag">${escapeHtml(pub.venue.split(',')[0])} · ${escapeHtml(pub.year)}${doi ? ` · DOI ${escapeHtml(doi)}` : ''}</span>
            <h3><a href="${escapeHtml(detailUrl)}">${escapeHtml(pub.title)}</a></h3>
            <p>${escapeHtml(pub.abstract)}</p>
            <div class="ai4city-paper-actions">${actions}</div>
          </div>
        </article>`;
    }).join('');
  };

  const ensureCiteModal = (lang) => {
    const text = getLabels(lang);
    if (!citeModal) {
      citeModal = document.createElement('div');
      citeModal.className = 'ai4city-cite-modal';
      citeModal.hidden = true;
      citeModal.innerHTML = `
        <div class="ai4city-cite-dialog" role="dialog" aria-modal="true">
          <div class="ai4city-cite-head"><strong>BibTeX</strong><button type="button" data-cite-close></button></div>
          <pre data-cite-text></pre>
          <div class="ai4city-cite-actions"><button type="button" data-cite-copy></button><a href="#" data-cite-download download="cite.bib"></a></div>
        </div>`;
      document.body.appendChild(citeModal);
      citeModal.addEventListener('click', (event) => {
        if (event.target === citeModal || event.target.closest('[data-cite-close]')) citeModal.hidden = true;
      });
      citeModal.querySelector('[data-cite-copy]').addEventListener('click', async () => {
        if (!currentBib) return;
        await navigator.clipboard.writeText(currentBib);
        const copyButton = citeModal.querySelector('[data-cite-copy]');
        copyButton.textContent = text.copied;
        setTimeout(() => { copyButton.textContent = text.copy; }, 1400);
      });
    }
    citeModal.querySelector('[data-cite-close]').textContent = text.close;
    citeModal.querySelector('[data-cite-copy]').textContent = text.copy;
    citeModal.querySelector('[data-cite-download]').textContent = text.download;
    return citeModal;
  };

  const bindCitationButtons = () => {
    document.addEventListener('click', (event) => {
      const button = event.target.closest('[data-cite-key]');
      if (!button) return;
      const langRoot = button.closest('[data-lang]');
      const lang = langRoot ? langRoot.dataset.lang : 'en';
      const text = getLabels(lang);
      const modal = ensureCiteModal(lang);
      const citeText = modal.querySelector('[data-cite-text]');
      const downloadLink = modal.querySelector('[data-cite-download]');

      currentBib = citationStore.get(button.dataset.citeKey) || '';
      citeText.textContent = currentBib || text.failed;
      if (currentBib) {
        downloadLink.href = URL.createObjectURL(new Blob([currentBib], { type: 'text/plain' }));
      } else {
        downloadLink.removeAttribute('href');
      }
      modal.hidden = false;
    });
  };

  const init = () => {
    document.querySelectorAll('[data-ai4city-pub-list]').forEach((root) => {
      renderPublicationList(root).catch((error) => console.error(error));
    });
    document.querySelectorAll('[data-ai4city-featured]').forEach((root) => {
      renderFeatured(root).catch((error) => console.error(error));
    });
    bindCitationButtons();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
}());
