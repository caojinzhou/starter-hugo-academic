---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 基于微博位置签到数据的 POI 更新方法
subtitle: ''
summary: ''
authors:
- ' 曹劲舟'
- ' 武红宇'
tags: []
categories: []
date: '2013-01-01'
lastmod: 2022-11-13T15:09:57+08:00
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
publishDate: '2022-11-13T07:09:56.681216Z'
publication_types:
- '2'
abstract: POI的现势性对于位置服务至关重要,但传统人工实地调查效率低,现势性无法满足需求.以当前用户参与数众多的微博社交网络为数据平台,提出了一种基于微博位置签到数据的POI更新方法.首先,对微博位置签到数据进行预处理,剔除语义与空间位置不一致的噪声点,在此基础上提出一种基于RANSAC算法的位置签到数据集地理配准方法,实现位置签到数据与已有地理数据库的可靠配准;然后,将位置签到数据集与已有POI数据库进行空间分析与匹配建模,对匹配不成功的位置签到数据进行有效性验证,提取有效新增数据入库用以更新POI;最后,以武汉市的街旁网位置签到数据进行POI更新实验,能够有效地发现新增POI和消失POI,为POI快速高效更新提供了全新的方式.
publication: '*地理空间信息*'
---
