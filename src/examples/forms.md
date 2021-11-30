---
metaTitle: Forms
metaDescription: Forms are your way to understand the user
title: Forms
description: Forms allow the users to send information back to the server, and by extension, you as the site owner. It is imperative to understand how to make forms as easy as possible for the user.
testimonial: Forms allow the users to send information back to the server, and by extension, you as the site owner. It is imperative to understand how to make forms as easy as possible for the user.
subjectName: Forms
subjectRank: Essentials
projectUrl: https://www.flickevents.com/
featuredImage: https://res.cloudinary.com/goodreds/image/upload/v1638237045/form_field_variants.png
topColor:
bgColor: D3F2E3
featured:
featuredImg: flickevents-featured
tasks: UI and UX
tags: ['graphic design', 'web design']
year: 2021
date: 2021-11-30
---

<div class="col-start-2 col-end-10 article">
<!-- Custom content -->

# Forms

Forms allow the users to send information back to the server, and by extension, you as the site owner. It is imperative to understand how to make forms as easy as possible for the user.

## Introduction

The components of a typical form are a set of labels and fields in which the user can input their information, with a submission button at the end to send the data.

Form elements include:

- Text fields (most common)
- Drop-downs
- Buttons (radio buttons or multi-select checkboxes)
- Text areas (for longer text input)
- Sliders (less common on large screens but more popular on touchscreens)

## Why use forms?

We use forms to get information from the user using a paradigm that is readily understood by the user. It is similar to a real-life paper form that is regularly filled out for multiple purposes.

## Common form uses

- Making a purchase
- Creating a profile
- Newsletter signup

## Designing your forms

Start with the text-field. Set the placeholder/input text to your base-unit divisible font-size (e.g. 16px if using a 4, 8, or 16px base-unit). Use this form field to guide your spacing and other fields in your form.

### Labels

The main purpose of labels is to explain the accompanying field, and a simple explanation will suffice. Don't forget that screen-readers use the labels to help partially-sighted users navigate your form, please use them.

Labels should use Title-Case for easier scanning for the user. UPPERCASE titles take longer to read and process.

Labels should be spaced no greater than the cap-height (height of capital letter) away from the field that they are explaining. Try doubling this space distance between the bottom of one text-field to the top of the next label - this should give you a visually-pleasing result.

<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="300" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D277%253A127" allowfullscreen></iframe>
<figcaption>
  Basic form field anatomy
</figcaption>
</figure>

### Icons

Be wary of using icons alone in place of text labels, partially because of the screen-reader behaviour, as mentioned in the **Labels** section, and because it has been shown via user-testing that the extent to which icons are understood is consistently overrated by designers and developers. The icons that are ok to use are:

- Magnifying glass to represent the search field
- Eye icon for revealing an obfuscated password field
- An 'X' to allow a field to be cleared - but be careful to not allow this to be mistaken for a validation error instead
<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1783%253A18446" allowfullscreen></iframe>
<figcaption>
  Guidelines for using icons in form fields
</figcaption>
</figure>

### Styling

- **Either boxes or simple lines** are the predominant methods for designing form fields. Of these two options, standard boxes are faster to process and easier to understand for most users.
- **Use either one of the two main styles in a single form** - never both, as it is confusing for users and inconsistent.
- Use a **lighter text colour with placeholder text** to signal to the user that it is not a filled field.
- **Keep the label font-size smaller than that of the field input font-size** to better demonstrate the correct hierarchy.
- A **subtle inner shadow** can help conversion with forms - this is the one of the few acceptable uses of Skeuomorphic design in current use.
- **Drop shadows are ok to use**, but be careful to ensure that the border is visible - if you make form fields look too ambiguous, they will not be understood as form fields.
- Ensure that **labels are left-aligned** (or right-aligned for RTL languages, such as Arabic) but never centre the labels above the form fields. Failure to do so forces the user's eyes to follow the inefficient Z-pattern scanning rather than the more-efficient F-pattern scanning.
- Use **left-aligned labels and text-fields** (or right-aligned for RTL languages, such as Arabic), unless the form is to be displayed on a wider screen, when you are free to try using inline labels on the left-hand side of the form fields.
- **Be wary of using an excess of placeholder text in preference to labels**, as the user is likely to lose context when the placeholder text disappears on selection of the form field.
- Try and ensure the form is a **single column rather than a multi-column** form, as this is easier for the user to navigate.
- **Keep forms narrow - 320 - 500px is ideal**. Longer fields take longer to process. If the form is long (i.e. 5+ form fields), it is better to split the form up into separate pages.
- **Avoid adding extraneous graphic elements to the margins of a narrow form**. Instead, let the form take prominence by giving it the full focus for the user.
- **It is ok to vary the field width for different data**. Age and postcodes are fine with smaller boxes. Leaving these fields large to maintain consistency can cause the user to second-guess themselves, thinking that a larger quantity of information is required in a field, e.g. a huge long field for a house number leads to users adding their number **and** their street name. Catch the invalid responses and guide the user, **and** use a smaller field for an expected number response.

## Best practice for forms

- **Keep forms succinct** \
  If in doubt, cut it out!
- **Explain to the user why they are filling in the form**\
  This form is needed to register an account; this form is needed, we know where to send the e-book; this form subscribes you to the free newsletter
- **Social media logins are easier for the user to fill in their details**\
  To use the Apple, Google or Facebook (or GitHub etc) login options, search for **OAuth** to get started
- **Design all the states for form elements. These are usually, but not exclusively:**\
<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D277%253A86" allowfullscreen></iframe>
  <figcaption>
    Different states for form fields
  </figcaption>
</figure>

- Inactive
- Focused
- Completed (or success)
- Completed (with errors)
- Disabled

Use border-colour, icons (crosses and ticks for validation), text weight, and background colour to delineate the states of the form fields.

For fields where an error can be thrown, an explanatory text label is imperative to the user understanding what they need to do to fix it quickly. What is readily apparent to you as the designer, developer or site owner, may not be understood by the user. You can demonstrate by way of an example (e.g. email must be name@domain.com). These helper messages should appear near the field which they refer; avoid putting them all together at the start or end of the form.

<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1761%253A17767" allowfullscreen></iframe>
<figcaption>
  Create a variant for each possible state of the form fields
</figcaption>
</figure>

- **Make each section of a multi-stage form as short as possible**\
  No more than 5 fields is good, and use multi-steps to complete the total form
- **A vertical layout is important**\
  The user will have an easier time scanning your form if it arranged vertically. Avoid doubling up columns as it makes your form more difficult to scan for the user.
- **Be clear about why you need certain information from the user**\
 A wary user may choose to not fill out the form if the information you are requesting is not justified from their perspective. For example, if you need the phone number of a customer to give them shipping updates, then let them know this with explanatory text to that effect.
  <figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1791%253A18448" allowfullscreen></iframe>
  <figcaption>
    Form fields: Excessive information requests
  </figcaption>
  </figure>

- **Only make essential information required\***\
  If information from the user is 'nice to have', rather than 'essential', make its collection optional. And rather than rely upon asterisks, use the word 'optional' as it's clearer for the user.

- **An overly-long form is rarely completed by the user.**\
  One way to shift the thinking about the required\* fields on a form is that you mark only the optional fields, as every other field is included only if it is required, if the form has been designed correctly.

- **Semantic grouping**\
  If elements of the form make sense to be grouped (e.g. name, date of birth, email address; street, suburb, state; cost, payment terms), separate them by using a small gap between the groups. This reduces the cognitive load for the user and makes your form quicker to scan.

- **Real-time validation**\
  It is better UX to validate the form as you go, alerting the user to any problems as they are focused on that particular field at that time. Do not simply validate on submission, presenting the user with a whole set of invalidated field error messages.
  <figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1792%253A18482" allowfullscreen></iframe>
<figcaption>
  Form fields: Real-time validation
</figcaption>
</figure>

- **Test your forms**\
  Find some real users to test out your forms. They often can inform you where parts that you think are self-evident are lacking. As forms are important, testing them is paramount.

- **Be wary about using tooltips to explain parts of the form to the user**\
  Start from the assumption that the user will **never** click the tooltip to ensure that the form is still understandable. Never rely upon the user finding hidden data elements.

- **Dropdowns**\
  Dropdowns are useful to help the user pick from a number of pre-defined options in a list. Just bear in mind that dropdowns are rendered by the browser, and are different dependent upon the user's operating system. To get around this inconsistency it is possible to style most elements of a form separately but don't forget to allow the time required to do so.

- **For dropdowns on phones**\
  Be aware that using the native option is preferable. Do not re-style these, as the user is already familiar with how these work on their device. Also be mindful that the dropdown will appear slightly different from Android to iOS users.

- **For longer dropdowns**\
  It can be useful to give the user a search or filter field to allow them to jump to where they need to go. Zambian users will thank you!

- **Radio buttons or dropdown?**\
  For areas where you may have only 5 or fewer options, a dropdown can be too much. Instead, **experiment with radio buttons** in their place, as this is often a lot easier to use.

- **Checkboxes**\
  <figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1795%253A18528" allowfullscreen></iframe>
<figcaption>
  Form fields: Checkboxes are useful where more than one option is required. For the styling of checkboxes, a tick is required and the background-fill colour should be changed to the accent colour
</figcaption>
</figure>

- **Checkboxes and switches are similar but different**\
<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1798%253A18478" allowfullscreen></iframe>
<figcaption>
  Form fields: As a general rule, switches are best reserved for simple on-off choices for single options where a toggle makes sense, whereas checkboxes can be used where there are multiple options for the user to choose
</figcaption>
</figure>

- **Switches are for real-time actions**\
  <figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1798%253A18477" allowfullscreen></iframe>
<figcaption>
  Form fields: **Switches, or toggles,** are mainly reserved for real-time actions, rather than on a form where the interaction would usually be expected after submission
</figcaption>
</figure>

- **Switches on mobile**\
  Switches on mobile need to be a **minimum clearance** of 44 points (~58px) along each axis to make them easily selectable by the user's finger. In a desktop environment, it is ok to go a little smaller, around 30 points (40px) as the mouse is a higher definition selection tool.

- **Safe areas around elements**\
  It is good practice to make the label selectable for checkboxes, switches and radio buttons as this is easier for the user to click by increasing the perceived size of the respective element.

- **Conversion**\
  Conversion isn't just a phrase that belongs in the murky world of SEO. Conversion is a metric that we can apply to forms in the following, easily understood way. If a user fills in your form and clicks the submission button, that is a successful conversion. If they didn't do that, it was not a conversion. The more users who successfully convert (i.e. fill in your form, and submit it), the higher your conversion rate. Simple.

- **Radio buttons**\
  **Radio buttons** are best for 2-4 items, where only one item can be selected by the user. Keeping radio buttons vertically-aligned is easier for the user. It is ok to pre-select the most common option if you believe it will make sense, and is a non-paying, option for the user. Be warned though, if you stray into the area of dark design patterns, such as preselecting optional paid options for the user, you can expect your conversion rates to drop significantly.

- **Sliders**\
  **Sliders** can work well if you have a group of semantically-linked options to choose from, and it makes sense for them to be arranged linearly. However, you should pay careful attention to ease-of-use and clarity. Ensure that the clickable area is generous and that clicking nearby an option makes the slider 'jump' to that point. If you have less than 4 options in a slider, consider using radio buttons instead.
  <figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1801%253A18533" allowfullscreen></iframe>
<figcaption>
  Form fields: Ensure that the clickable area is generous and that clicking nearby an option makes the slider 'jump' to that point
</figcaption>
</figure>

- **Consistency**\
  <figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1761%253A17767" allowfullscreen></iframe>
<figcaption>
  Form fields: All designed form elements should be assembled beforehand, with their states/variations, to ensure **consistency** across the whole form
</figcaption>
</figure>

- **Required or not?**\
  Always ask yourself if you really need the data from a particular field before you add it to the form. An overly-long form is a great way to ensure that it is rarely completed by the user. If a field is not necessary, don't add it.

- **When to use optional?**\
  Rather than letting the user know which fields are '**Required'** - as your form should only really be composed of required information - let the user know which fields are '**Optional**' instead.

- **Number of buttons on a form**\
  Try and use a single button on a form. If you really need a second button, ensure that you use contrasting colours, such as your primary and secondary colours, so the user is not confused as to which button to choose.

- **Clear labelling**\
  Don't have ambiguous labels on your form buttons - _next_ & _forward_ are poor choices, as they tell the user nothing about what they can expect if the form is submitted. Instead, use verbs or 'action verbs', such as _apply now, order now, get a quote, join us, sign up, start today, show prices, view benefits etc._
  <figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1830%253A19013" allowfullscreen></iframe>
  <figcaption>
    Form fields: Clear labelling
  </figcaption>
  </figure>

- **Long forms**\
  <figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1835%253A18750" allowfullscreen></iframe>
<figcaption>
  Form fields: With longer forms, group blocks together - e.g. addresses, subscription options, sizing etc.
</figcaption>
</figure>

- **Multiple steps**\
  If the user requires multiple steps to complete a form, it is essential to give them feedback of their progress, such as a percentage value, steps completed / steps in total. Don't let your user lose their progress in a form, else your conversion rate will fall.
  <figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1848%253A19189" allowfullscreen></iframe>
  <figcaption>
    Break up longer forms and let the user know their approximate progress until completion
  </figcaption>
  </figure>

- **Feedback via animations**\
  Find ways to demonstrate to the user that the form is interactive. A little animation can go a long way towards making a form more fun for the user. Think about ideas such as little bounce animations, or maybe a quick grow transition once a checkbox or radio button is triggered, or a pulsing red dot if a validation error occurs. They don't have to be anything too detailed, just little pointers to the user that they are making progress.

- **Be creative and have some fun**\
  Have some fun! Users typically don't associate form-filling with excitement or fun, in real-life or online, so make your forms a little different, put in the effort with even the smallest of details to improve the experience and the user will respond positively. A happy user means better conversion rates.

- **Mobile-screen keyboards**\
  Make sure that you use the correct field identifiers to display the correct keyboard variants on mobile devices. This means, for example, that a user filling in a field for their email address will display the dedicated @ symbol on their on-screen keyboard, thereby saving them a click elsewhere to find it.

- **Make your forms easy and fun to use**\
  Make your forms easier, and more pleasant to use for the user, and they will reward you with a higher conversion rate.
  <figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1892%253A20195" allowfullscreen></iframe>
  <figcaption>
    Instead of using the default radio buttons, style them in to something more interesting for the user
  </figcaption>
  </figure>

<!-- end custom content -->

### The Client

It is a project from a recurring client. We work on a brand identity project previously. This time, the client needs to launch an event management service. The service focuses on audience engagement and fully utilise technology to help user setup event with ease. FlickEvents help businesses by providing insight analytics to help businesses to discover intelligently, to outreach, grow and maintain relationships with each other.

### Branding

Since this is a new product, there isn't much data that we can work with. We did our research by studying a few of our competitors. The goals are:

- To create a logo that's easy to integrate into a banner
- Easy to remember.

</div>

<div class="col-start-2 col-end-10 md:grid md:grid-cols-2 gap-1">

{% figure 'flickevents-exploration', 'logo explorations', 'logo mark explorations' %}

{% figure 'flickevents-mockup', 'logo marks mockup', 'logo marks mockup' %}

</div>

<div class="col-start-3 col-end-9">

Initially, we try something more 'event' related by using a curtain and pulse as the base elements. Unfortunately, the outcome isn't as expected.

The logo mark looks like something related to show business. It doesn't explain the objective of FlickEvents. So, I continue to explore the possibilities and options for this rebranding project. The idea is to provide a 2-dimensional mark that showcases the perspective of the provided services.

</div>

<div class="col-start-2 col-end-10">
{% figure 'flickevents-guidelines', 'final logo guidelines', 'Final logo guidelines' %}
</div>

<div class="col-start-3 col-end-9">

### Web

We took the more direct approach when explaining how FlickEvents work. A shorter header without large hero image and jump straight into **How it works** section. We also provide a nice little section to introduce both of the young founders of FlickEvents.

</div>

<div class="col-start-2 col-end-10">
{% figure 'flickevents-web', 'web design', 'Features and how it works section.' %}
{% figure 'flickevents-about', 'web design', 'The about page.' %}
</div>

<div class="col-start-3 col-end-9">

### The Result

The client is very happy with result 😀

</div>
