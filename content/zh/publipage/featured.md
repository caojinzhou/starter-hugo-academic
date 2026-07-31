---
widget: blank
headless: true
active: true
weight: 10
title: "代表性论文"
design:
  columns: '1'
advanced:
  css_class: ai4city-featured-papers-section
---

<!-- 修改 data-featured-slugs 即可选择任意论文进入代表性论文；slug 来自下方全部论文列表的 data-slug。 -->
<div class="ai4city-featured-papers" data-featured-papers data-featured-data="ai4cityPubDataZh" data-featured-slugs="cao-urbanmmcl-2026 wang-sat2flow-2026" data-cite-label="引用"></div>

<script>
(() => {
  const visualHtml = (visual) => {
    if (visual === 'urbanmmcl') return '<span class="modality satellite"></span><span class="modality street"></span><span class="modality poi"></span><span class="modality text"></span><span class="fusion-line"></span><span class="embedding-node"></span>';
    if (visual === 'sat2flow') return '<span class="sat-cell"></span><span class="sat-cell"></span><span class="sat-cell accent"></span><span class="sat-cell"></span><span class="flow-arrow"></span><span class="flow-bar one"></span><span class="flow-bar two"></span><span class="flow-bar three"></span>';
    return '<span class="generic-node one"></span><span class="generic-node two"></span><span class="generic-node three"></span><span class="generic-line one"></span><span class="generic-line two"></span>';
  };
  const escapeHtml = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const renderFeatured = () => {
    document.querySelectorAll('[data-featured-papers]').forEach((root) => {
      const data = window[root.dataset.featuredData] || [];
      if (!data.length) return;
      const slugs = (root.dataset.featuredSlugs || '').split(/\s+/).filter(Boolean);
      const selected = slugs.map((slug) => data.find((pub) => pub.slug === slug)).filter(Boolean);
      root.innerHTML = selected.map((pub) => `
        <article class="ai4city-feature-paper">
          <div class="ai4city-paper-visual ${pub.visual === 'urbanmmcl' ? 'urbanmmcl-visual' : pub.visual === 'sat2flow' ? 'sat2flow-visual' : 'generic-paper-visual'}" aria-hidden="true">${visualHtml(pub.visual)}</div>
          <div class="ai4city-paper-copy">
            <span class="ai4city-paper-tag">${escapeHtml(pub.venue.split(',')[0])} · ${pub.year}</span>
            <h3>${escapeHtml(pub.title)}</h3>
            <p>${escapeHtml(pub.abstract)}</p>
            <div class="ai4city-paper-actions"><button type="button" data-cite-key="${escapeHtml(pub.slug)}">${root.dataset.citeLabel}</button>${pub.doi ? `<a href="${escapeHtml(pub.doi)}">DOI</a>` : ''}${pub.code ? `<a href="${escapeHtml(pub.code)}">Code</a>` : ''}</div>
          </div>
        </article>`).join('');
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderFeatured);
  else renderFeatured();
})();
</script>
