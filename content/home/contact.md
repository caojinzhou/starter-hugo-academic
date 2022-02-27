---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 130

title: Contact
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
  email: caojinzhou2011@Gmail.com
  phone: 888 888 88 88
  address:
    street: 3002 Lantian Road, Pingshan District
    city: Shenzhen
    region: Guangdong
    postcode: '94305'
    country: China
    country_code: CH
  coordinates:
    latitude: '22.70142'
    longitude: '114.395955'
  directions: Enter Building C-1 and take the stairs to Office 200 on Floor 2
  office_hours:
    - 'Monday 10:00 to 13:00'
    - 'Wednesday 09:00 to 10:00'
  appointment_url: 'https://calendly.com'
  contact_links:
    - icon: weixin
      icon_pack: fab
      name: Wechat Me
      link: uploads/weixin.jpg
    - icon: video
      icon_pack: fas
      name: Zoom Me
      link: 'https://zoom.com'

design:
  columns: '2'
---
