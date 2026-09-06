---
title: "📊 数据科学基础（2026）｜Data Science Fundamentals"
summary: "面向 AI 时代的数据科学基础课与先导课：从数据思维、核心分析方法到可验证的 AI 协作实践。"
date: '2026-09-06'
type: book
commentable: true
active: true
---

{{< toc hide_on="xl" >}}

<section class="stic-course-hero">
  <span class="stic-course-kicker">2026–2027 秋季 · 人工智能学院</span>
  <h2>从数据思维走向 AI 原生实践</h2>
  <p>把真实问题转化为可观察、可计算、可验证的数据问题，用代码、模型和证据形成可信结论。</p>
  <div class="stic-course-meta">
    <span><strong>授课教师</strong>曹劲舟 博士、副教授</span>
    <span><strong>理论课</strong>周一 3–4 节 · C-5-329</span>
    <span><strong>实验课</strong>周一 11–14 节 · 双周 · C1-116</span>
    <span><strong>联系邮箱</strong>caojinzhou@sztu.edu.cn</span>
  </div>
</section>

<nav class="stic-course-nav" aria-label="课程页面导航">
  <a href="#课程定位">课程定位</a>
  <a href="#课程内容">课程内容</a>
  <a href="#课件与实验">课件与实验</a>
  <a href="#考核与项目">考核与项目</a>
  <a href="#ai-使用与课程规范">AI 使用规范</a>
</nav>

> 授课对象为大数据 1 班；课程代码、学分学时及其他未列事项以教务系统和开课通知为准。

## 课程定位

《数据科学基础》围绕“真实问题—数据—模型—证据—决策”展开，帮助学生掌握数据清洗、探索、可视化与常用分析模型的基本逻辑，并了解基础模型、Embedding、RAG、Agent 与多模态模型如何进入数据工作流。

本课程不是 Python 语法、数学推导或算法模型的简单罗列，而是一门问题驱动的数据科学导论，为数据库、统计学习、深度学习、数据可视化、图计算和自然语言处理等后续课程建立统一的认知框架。

## 学习目标

<div class="stic-course-goals">
  <article><b>01</b><h3>理解概念</h3><p>理解数据、信息、知识、大数据、数据科学与 AI 的关系。</p></article>
  <article><b>02</b><h3>掌握流程</h3><p>贯通问题定义、数据获取、建模、评估与表达。</p></article>
  <article><b>03</b><h3>使用工具</h3><p>使用 Python、Notebook、可视化与常用分析库。</p></article>
  <article><b>04</b><h3>协作 AI</h3><p>规范、透明、可验证地使用大模型辅助分析。</p></article>
  <article><b>05</b><h3>形成判断</h3><p>理解数据和 AI 的边界，识别偏差、隐私与风险。</p></article>
</div>

## 课程内容

<div class="stic-course-modules">
  <article class="is-blue"><span>模块 A</span><h3>数据基础与探索</h3><p>数据、大数据、数据质量、EDA 与可视化</p></article>
  <article class="is-orange"><span>模块 B</span><h3>核心分析方法</h3><p>分类、回归、聚类、关联分析与模型评估</p></article>
  <article class="is-green"><span>模块 C</span><h3>AI 原生数据科学</h3><p>文本与图数据、Embedding、RAG、多模态与 Agent</p></article>
  <article class="is-purple"><span>模块 D</span><h3>场景与实践</h3><p>城市、教育、商业、科学案例与期末项目</p></article>
</div>

### 18 周教学节奏

| 周次 | 学习阶段 | 主要内容 |
|:---:|:---|:---|
| 第 1–4 周 | 建立全局框架 | 大数据概述、数据科学流程、数据探索与可视化 |
| 第 5–9 周 | 掌握核心方法 | 聚类、分类、回归、关联分析与评估 |
| 第 10–16 周 | 进入 AI 原生主题 | 图数据、文本、Embedding、RAG 与多模态数据 |
| 第 17–18 周 | 完成项目与复盘 | 项目展示、课程回顾与期末复习 |

实际进度将根据校历和教务安排调整。课堂按照“概念讲解—案例拆解—实验实现—小挑战—项目展示”的学习闭环推进。

## 课件与实验

本页面集中发布 PPT、代码、数据集、阅读材料、实验说明和提交入口；课程群用于通知、答疑和课堂互动。资料将在每周课程结束后持续更新，请收藏并定期查看。

<div class="stic-course-actions">
  <!-- TODO: 在 href 中填入课件云盘链接。 -->
  <a class="stic-course-action is-download" href="" target="_blank" rel="noopener">
    <span class="stic-course-action-icon" aria-hidden="true">↓</span>
    <span><strong>课件与学习资料</strong><small>PPT、代码、数据集与阅读材料</small></span>
    <em></em>
  </a>
  <!-- TODO: 在 href 中填入实验提交云盘链接。 -->
  <a class="stic-course-action is-upload" href="" target="_blank" rel="noopener">
    <span class="stic-course-action-icon" aria-hidden="true">↑</span>
    <span><strong>实验提交入口</strong><small>实验报告、代码与相关附件</small></span>
    <em></em>
  </a>
</div>

课程共设置 9 个实验。实验重点是理解每一步为什么这样做、如何检查，以及结果是否可信。

| 编号 | 实验主题 | 类型 |
|:---:|:---|:---|
| 1 | Python 与 Notebook 基础 | 验证性实验 |
| 2 | 数据清洗与探索性分析 | 验证性实验 |
| 3 | 数据可视化与叙事 | 验证性实验 |
| 4 | 聚类分析 | 验证性实验 |
| 5 | 分类模型 | 验证性实验 |
| 6 | 回归与预测 | 验证性实验 |
| 7 | 图数据计算 | 验证性实验 |
| 8 | 文本、Embedding 与 RAG | AI 专题实验 |
| 9 | 多模态数据小项目 | 综合应用 |

## 考核与项目

<div class="stic-course-assessment" aria-label="课程考核比例">
  <span><strong>5%</strong><em>课堂出勤</em></span>
  <span><strong>20%</strong><em>实验</em></span>
  <span><strong>25%</strong><em>期末项目</em></span>
  <span><strong>50%</strong><em>期末考试</em></span>
</div>

期末项目以不超过 3 人的小组完成，成果包括**海报、实践报告、代码和答辩**。每位成员须有明确贡献，并能解释自己负责的数据、代码与结论；所有数据来源、代码环境和 AI 使用过程必须可追踪。

| 时间 | 项目阶段 | 主要成果 |
|:---:|:---|:---|
| 第 2 周 | 组队与方向 | 确定小组和问题领域 |
| 第 8 周 | 项目介绍书 | 问题、文献、数据、方法、分工与计划 |
| 第 15 周 | 中期调整 | 数据质量、风险与方案调整 |
| 第 18 周 | 展示与答辩 | 海报、实践报告、代码与学术讨论 |

选题可以从校园能耗预测、通勤与拥堵、课程学习分析、城市功能识别、舆情与文本挖掘、RAG 助手评测等方向起步。选题不必追求复杂，但必须有数据支持，并形成完整、可验证的分析闭环。

## AI 使用与课程规范

本课程采用“允许使用、分类规范、强制声明、人工验证、随机口头质询”的原则。

<div class="stic-course-ai-rules">
  <article class="is-green"><strong>允许</strong><p>解释概念、学习提纲、代码提示、调试建议、图表草稿和表达润色。</p></article>
  <article class="is-yellow"><strong>需声明</strong><p>AI 生成或改写代码、数据处理建议、合成数据，以及参与报告主要分析。</p></article>
  <article class="is-red"><strong>禁止</strong><p>考试中使用、整份作业代做、伪造数据或引用、上传敏感数据与试题。</p></article>
</div>

- 作业须说明使用的模型与版本、使用环节、关键提示词、人工修改与验证过程；
- 代码应包含数据说明、环境信息和关键参数，确保分析结果可以复现；
- 不得抄袭或提交由他人、模型代做的成果；最终结果由本人或本组负责。

### 课堂与考勤

- 理论课和实验课均使用学校考勤系统，不迟到、不早退，考勤不得补签；
- 课堂禁止佩戴耳机或使用手机处理与教学无关的事项，请从前排依次就座；
- 缺勤超过课程总学时的 1/3，或缺交作业、实验报告数量超过 1/3，将取消考试资格。

## 任课教师

答疑可通过课堂、课程群或预约面谈进行。发送邮件时，请使用主题清楚的标题，并注明姓名、班级和具体问题。

{{< mention "jinzhou-Cao" >}}
