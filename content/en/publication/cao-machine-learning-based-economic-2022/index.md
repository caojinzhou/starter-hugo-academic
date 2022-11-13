---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Machine Learning-Based Economic Development Mapping from Multi-Source Open
  Geospatial Data
subtitle: ''
summary: ''
authors:
- Rui Cao
- Wei Tu
- Jixuan Cai
- Tianhong Zhao
- Jie Xiao
- Jinzhou Cao
- Qili Gao
- Hanjing Su
tags:
- Digital mapping
- Economic development
- Economic models
- Feature extraction
- Graph representations
- Graphical representations
- Gross Domestic Product--GDP
- Indicators
- Machine learning
- Neural networks
- Population statistics
- Population structure
- Regional development
- Remote sensing
- Roads
- Social factors
- Socioeconomics
- Spatial data
categories: []
date: '2022-01-01'
lastmod: 2022-11-13T15:09:58+08:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2022-11-13T07:09:57.471601Z'
publication_types:
- '2'
abstract: Timely and accurate socioeconomic indicators are the prerequisite for smart
  social governance. For example, the level of economic development and the structure
  of population are important statistics for regional or national policy-making. However,
  the collection of these characteristics usually depends on demographic and social
  surveys, which are time- and labor-intensive. To address these issues, we propose
  a machine learning-based approach to estimate and map the economic development from
  multi-source open available geospatial data, including remote sensing imagery and
  OpenStreetMap road networks. Specifically, we first extract knowledge-based features
  from different data sources; then the multi-view graphs are constructed through
  different perspectives of spatial adjacency and feature similarity; and a multi-view
  graph neural network (MVGNN) model is built on them and trained in a self-supervised
  learning manner. Then, the handcrafted features and the learned graph representations
  are combined to estimate the regional economic development indicators via random
  forest models. Taking China's county-level gross domestic product (GDP) as an example,
  extensive experiments have been conducted and the results demonstrate the effectiveness
  of the proposed method, and the combination of the knowledge-based and learning-based
  features can significantly outperform baseline methods. Our proposed approach can
  advance the goal of acquiring timely and accurate socioeconomic variables through
  widely accessible geospatial data, which has the potential to extend to more social
  indicators and other geographic regions to support smart governance and policy-making
  in the future.
publication: '*ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information
  Sciences*'
doi: 10.5194/isprs-annals-V-4-2022-259-2022
---
