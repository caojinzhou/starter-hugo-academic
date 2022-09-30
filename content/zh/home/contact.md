---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

active: false
# Order that this section appears on the page.
weight: 130

title: 联系方式
subtitle:

content:
  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: netlify
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: false

  # Contact details (edit or remove options as required)
  email: caojinzhou2011@gmail.com
  phone: 888 888 88 88
  address:
    street: 3002 Lantian Road, Pingshan District
    city: 深圳市
    region: 广东省
    postcode: '94305'
    country: 中国
    country_code: CH
  coordinates:
    latitude: '22.70142'
    longitude: '114.395955'
  directions: Enter Building C-1 and take the stairs to Office 200 on Floor 2
  office_hours:
    - 'Monday 10:00 to 13:00'
    - 'Wednesday 09:00 to 10:00'
  appointment_url: 'https://calendly.com/caojz/30min'
  contact_links:
    - icon: weixin
      icon_pack: fab
      name: 微信
      link: uploads/weixin.jpg
    - icon: video
      icon_pack: fas
      name: Zoom Me
      link: 'https://zoom.com'

design:
  columns: '2'
---
