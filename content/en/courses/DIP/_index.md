---
title: 📊 IB00078 Digital Image Processing（数字图像处理）
summary: This undergraduate-level course introduces students to major themes, questions, issues, and hypotheses in Digital Image Processing(DIP).
date: '2021-04-06'
type: book
commentable: true

---
-----
**Instructor**:       Jinzhou Cao(曹劲舟)                 <br>
**Email**:              `caojinzhou@sztu.edu.cn`                 <br>
**Room**:             C-5-312 or Online via TencentMeeting  <br>
**Time**:               Wed. 15:50-17:20 and Thur. 18:50-21:40      <br>
**Credits**:           4/72 hours

-----


{{< toc hide_on="xl" >}}

## Course Description
数字图像处理是指将图像信号转换成数字信号并利用计算机对其进行处理的过程。本课程将全面、系统地介绍数字图像处理的基础理论及基本技术。包括绪论，灰度变换与空间滤波，频率域滤波，图像增强，图像复原，图像压缩，彩色图像处理，嵌入式系统硬件处理等。





<!--1. Ortega, L. (Revised version). *Understanding second language acquisition*. [**USLA** for short]
2. De Houwer, A. (2021). *Bilingual development in childhood*. Cambridge: Cambridge University Press [**BDC** for short]-->

<!-- The following readings will also be used in class: -->

<!-- - De Houwer, A. (2020). Early bilingualism. In C.A. Chapelle (Ed.) *The concise encyclopedia of applied linguistics* (pp. 405--413). Wiley Blackwell.
# - Ioup, G., Boustagoui, E., Tigi, M., & Moselle, M. (1994). Reexamining the critical period hypothesis: A case of successful adult SLA in a naturalistic environment. *Studies in Second Language Acquisition*, *16*, 73--98.
# - Supasiraprapa, S. (2019). Frequency effects on first and second language compositional phrase comprehension and production. *Applied Psycholinguistics*, *40*, 987--1017.
# - Thompson, A. S., & Vasquez, C. (2015). Exploring motivational profiles through language learning narratives. *Modern Language Journal*, *99*, 158--174. -->

&nbsp;

## What you will learn

- 了解数字图像处理的发展历程、灰度变换、空间处理及频域处理的基本方法及理论、数字图像彩色空间极其转换、数学形态学的基本概念及理论。

- 理解图像压缩概念及其常用方法原理，图像平滑概念及常用方法原理，图像分割的原理及常用方法原理，图像复原与重建的概念及常用方法的原理。

- 掌握使用Matlab进行图像处理编程、直方图均衡化的方法、离散傅立叶变换的方法、空间噪声滤波及频域噪声滤波的方法、腐蚀/膨胀运算及开/闭运算的方法、常用边缘检测方法、通过全局阈值进行灰度图像二值化的方法。

&nbsp;

## Textbooks

冈萨雷斯（阮秋琦 译）. *数字图像处理* (MATLAB版，第二版). 电子工业出版社，2020年6月

<!-- ## Courses in this program

{{< list_children >}} -->

&nbsp;

<!-- ## FAQs

{{< spoiler text="Are there prerequisites?" >}}
There are no prerequisites for the first course.
{{< /spoiler >}}

{{< spoiler text="How often do the courses run?" >}}
Continuously, at your own pace.
{{< /spoiler >}}

{{< cta cta_text="Begin the course" cta_link="python" >}} -->

## Grade breakdown:

|  Requirements              | Percent      | Points                       | Note                                       |
|:---------------------------|:------------:|:-----------------------------|:-------------------------------------------|
| Participation  出勤        | 5%           |                              |                                            |
| Assignment     作业        | 10%          | 5 points each, 2 in total    |                                            |
| Presentation   报告        | 10%          |                              |                                            |
| Laboratory     实验        | 35%          | 5 points each, 7 in total    |                                            |
| Final  exam    考试        | 40%          |                              |                                            |

&nbsp;

## Assignment descriptions:
1. **作业1 (5%)**

随堂作业，霍夫曼变换。

2. **作业2 (5%)**



&nbsp;

## Course Project(10%):

[{{% staticref "uploads/DIP_slides/课程设计作业.pdf" "newtab" %}}课程设计题目{{% /staticref %}}]

**作业要求**

1、自行分小组，4人为一个小组。小组成员指定1人为组长，其余成员须对课程设计具有明确的分工；

2、要求独立完成设计项目，开发工具为MATLAB，也可为C、C++、java等，具体自选。各组长有责任督促组员完成任务；

3、尽量不使用封装好的、现成的库，对于独立实现算法撰写的小组可进行加分；

4、鼓励大家根据兴趣和需求，自定义开发更多功能模块；

5、时间为5月7日~6月8日。6月8日下午的课上进行现场PPT展示，需对系统设计思路、功能模块等内容进行讲解。每个小组10分钟时间。

&nbsp;

## Class Schedule
[{{% staticref "uploads/DIP_slides/DIP_Ch3.zip" "newtab" %}}Slides of Weeks 1-6{{% /staticref %}}]

|Weeks |  Dates       | Topics                          | Lecture slides	                                                           | Assignments                                |
|----- |:------------:|:--------------------------------|------------------------------------------------------------------------------|--------------------------------------------|
|  7   | 04/06/22     | 图像复原与重建[1]               | |                                            |
|  8   | 04/13/22     | 图像复原与重建[2]               | [{{% staticref "uploads/DIP_slides/DIP_Ch4_ALL.pdf" "newtab" %}}Slides{{% /staticref %}}]        |                                            |
|  9   | 04/20/22     | 图像分割                        | [{{% staticref "uploads/DIP_slides/DIP_Ch7_图像分割.pdf" "newtab" %}}Slides{{% /staticref %}}]                                                                             |                                            |
|  10  | 04/27/22     | 图像压缩 [1]                    |                                                                              |                |
|  11  | 05/04/22     | 图像压缩 [2]                    | [{{% staticref "uploads/DIP_slides/DIP_Ch6_图像压缩.pdf" "newtab" %}}Slides{{% /staticref %}}]                                                                             |                                            |
|  12  | 05/11/22     | 彩色图像处理 [1]                |                                                                              |                                            |
|  13  | 05/18/22     | 彩色图像处理 [2]                |[{{% staticref "uploads/DIP_slides/DIP_Ch5 彩色图像处理.pdf" "newtab" %}}Slides{{% /staticref %}}]                                                                              |             |
|  14  | 05/25/22     | 表示与描述 [1]                  |                                                                              |                                            |
|  15  | 06/01/22     | 表示与描述 [2]                  |[{{% staticref "uploads/DIP_slides/DIP_Ch8_表示与描述.pdf" "newtab" %}}Slides{{% /staticref %}}]                                                                              |   |
|  16  | 06/08/22     | 汇报展示 [1]                    |                                                                              | |
|  17  | 06/15/22     | 汇报展示 [2]                    |                                                                              |           |
|  18  | 06/22/22     | 复习与答疑                      |[{{% staticref "uploads/DIP_slides/期末复习.pdf" "newtab" %}}Slides{{% /staticref %}}]                                                                              |          |

&nbsp;


## Experimental Project
[{{% staticref "uploads/DIP_slides/实验报告模板.docx" "newtab" %}}实验报告模板下载{{% /staticref %}}]

|Weeks |  Dates       | Topics                          | Textbooks	                                                           | Assignments                                |
|----- |:------------:|:--------------------------------|------------------------------------------------------------------------------|--------------------------------------------|
|  8   | 04/14/22     | 图像增强实验               | [{{% staticref "uploads/DIP_slides/实验1.docx" "newtab" %}}实验指导书{{% /staticref %}}]; [{{% staticref "uploads/DIP_slides/Matlab数字图像处理函数.pdf" "newtab" %}}Matlab数字图像处理函数{{% /staticref %}}]; [{{% staticref "uploads/DIP_slides/image_e1.rar" "newtab" %}}图像数据{{% /staticref %}}] |4/26晚上12点前第一次实验报告发到邮箱: caojinzhou@sztu.edu.cn。文档PDF格式，命名方式: 学号-姓名-实验1 |
|  9   | 04/21/22     | 图像傅里叶变换实验                        | [{{% staticref "uploads/DIP_slides/实验2.docx" "newtab" %}}实验指导书{{% /staticref %}}];[{{% staticref "uploads/DIP_slides/image_e2.zip" "newtab" %}}图像数据{{% /staticref %}}]                                                                             |5/3晚上12点前第二次实验报告发到邮箱: caojinzhou@sztu.edu.cn。文档PDF格式，命名方式: 学号-姓名-实验2                                            |
|  10  | 04/28/22     | 图像几何变换实验                    | [{{% staticref "uploads/DIP_slides/实验3.docx" "newtab" %}}实验指导书{{% /staticref %}}] |5/10晚上12点前第三次实验报告发到邮箱: caojinzhou@sztu.edu.cn。文档PDF格式，命名方式: 学号-姓名-实验3|
|  11  | 05/05/22     | 图像复原实验                   |   [{{% staticref "uploads/DIP_slides/实验4.docx" "newtab" %}}实验指导书{{% /staticref %}}]|5/17晚上12点前第四次实验报告发到邮箱: caojinzhou@sztu.edu.cn。文档PDF格式，命名方式: 学号-姓名-实验4|
|  12  | 05/12/22     | 图像分割实验              |[{{% staticref "uploads/DIP_slides/实验5.docx" "newtab" %}}实验指导书{{% /staticref %}}]; [{{% staticref "uploads/DIP_slides/image_e5.rar" "newtab" %}}图像数据{{% /staticref %}}]                                                                              |5/24晚上12点前第五次实验报告发到邮箱: caojinzhou@sztu.edu.cn。文档PDF格式，命名方式: 学号-姓名-实验5                                            |
|  13  | 05/19/22     | 数字图像压缩与解压                | [{{% staticref "uploads/DIP_slides/实验6.docx" "newtab" %}}实验指导书{{% /staticref %}}]                                                                            |5/31晚上12点前第六次实验报告发到邮箱: caojinzhou@sztu.edu.cn。文档PDF格式，命名方式: 学号-姓名-实验6             |
|  14  | 05/26/22     | 大作业|                                                                              |                                            |
|  15  | 06/02/22     | 基于嵌入式设备的图像处理 [1]                  | [{{% staticref "uploads/DIP_slides/实验7.docx" "newtab" %}}实验指导书{{% /staticref %}}]                                                                             |   |
|  16  | 06/09/22     | 基于嵌入式设备的图像处理 [2]|                                                                              | |


&nbsp;

## Meet your instructor

{{< mention "jinzhou-Cao" >}}