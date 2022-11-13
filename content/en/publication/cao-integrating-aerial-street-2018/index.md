---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Integrating Aerial and Street View Images for Urban Land Use Classification
subtitle: ''
summary: ''
authors:
- Rui Cao
- Jiasong Zhu
- Wei Tu
- Qingquan Li
- Jinzhou Cao
- Bozhi Liu
- Qian Zhang
- Guoping Qiu
tags: []
categories: []
date: '2018-09-01'
lastmod: 2022-11-13T15:07:02+08:00
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
publishDate: '2022-11-13T07:07:01.804532Z'
publication_types:
- '2'
abstract: Urban land use is key to rational urban planning and management. Traditional
  land use classification methods rely heavily on domain experts, which is both expensive
  and inefficient. In this paper, deep neural network-based approaches are presented
  to label urban land use at pixel level using high-resolution aerial images and ground-level
  street view images. We use a deep neural network to extract semantic features from
  sparsely distributed street view images and interpolate them in the spatial domain
  to match the spatial resolution of the aerial images, which are then fused together
  through a deep neural network for classifying land use categories. Our methods are
  tested on a large publicly available aerial and street view images dataset of New
  York City, and the results show that using aerial images alone can achieve relatively
  high classification accuracy, the ground-level street view images contain useful
  information for urban land use classification, and fusing street image features
  with aerial images can improve classification accuracy. Moreover, we present experimental
  studies to show that street view images add more values when the resolutions of
  the aerial images are lower, and we also present case studies to illustrate how
  street view images provide useful auxiliary information to aerial images to boost
  performances.
publication: '*Remote Sensing*'
doi: 10.3390/rs10101553
---
