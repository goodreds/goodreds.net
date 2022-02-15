---
metaTitle: Colours
metaDescription: Colours and how to use them effectively is of key importance.
title: Colours
description: Using colours effectively will allow your users to quickly draw conclusions of what is more- or less-important at a glance.
excerptText: Getting your colours right will change how your users perceive your app. No-one likes looking at colours that clash.
subjectName: Colours
subjectRank: Essentials
projectUrl: https://www.Colours/
dribbble: https://dribbble.com/kailoon/projects/304610-99-co
featuredImg: colour_swatches
tailwindAccentColour: lime
featured: true
span: true
tasks: Design process
year: 2021
date: 2021-10-27
---

<!-- https://res.cloudinary.com/goodreds/image/upload/v1639537970/palettes_module.png -->

<div class="col-start-2 col-end-10 article">

# Introduction

Colours are the main currency on the web, and as such, it is important to get them right. At their simplest level, they can be clicked to carry out actions on behalf of the user. The action undertaken is typically written on the button, akin to real-world buttons found on game controllers, cars etc. The first point is to ensure that the button description, in the form of the text on it, reflects the action that the user can expect to occur once clicked.

<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D3998%3A49542" allowfullscreen></iframe>
<figcaption>
  Examples of colour palettes
</figcaption>
</figure>

<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1980%3A64773" allowfullscreen></iframe>
<figcaption>
  Colour swatches
</figcaption>
</figure>

<!-- https://www.figma.com/file/LGqH2iAEDqig26lZ8LBGrB/Example-Design-System?node-id=1980%3A64773 -->

# Types of buttons

As a general rule, the less a button stands out, the less it will be utilised by the user, so removing elements from the button such as fills and icons begins to degrade how easily a user may identify it as a button. As such, it is better to ensure that prominent buttons do actually look like buttons, reserving them for primary actions and prominent buttons such as call-to-action buttons.

The one exception is text link buttons which lack any decoration beyond, usually, an underline. These buttons are a throwback to the early days of the minimally-styled web, and as such are one of the oldest and longest lasting design patterns. Nearly all users intuitively understand the underlined words represent text link 'buttons'.

# Internal spacing


Inside the button you should use the correct internal spacing to generate a minimum height for the button of 54-60px. So if the base-size for you design (typically the font size) is 16px then that would equate to:

```
(54px - 16px)/2 = 19px
```

Using the 19px of vertical padding above and below the text label of the button gives a correct minimum height for the button of 54px:

```
16px + (19px * 2) = 54px
```

There is more leeway with the button width but a good rule for a balanced result is to aim for double the amount of the vertical internal padding applied as horizontal padding:

```
19px * 2 = 38px
```

## Internal spacing
Ensure that your buttons contain some internal padding to increase the clickable area. This makes the button easier to use. A minimum height for a button would be around 56-64px (44-48pt) so this is a good aim for the clickable area of the button.

As a rule of thumb aiming for (a minimum of) twice the horizontal-padding than the vertical-padding will give you nicely proportioned buttons.


# Prominent buttons
Use Primary or call-to-action buttons for the most prominent actions. If the button is going to finalise a process, including charging a user for a service, then use some kind of accompanying text to let the user know what is about to occur when the button is clicked.

<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1648%253A18717" allowfullscreen></iframe>
<figcaption>
  Prominence for buttons
</figcaption>
</figure>

# Button states
You must design a full range of states for each button for the purposes of giving feedback to your users as to which parts of the user interface can be interacted with, which parts are currently active, and which parts may be off-limits or disabled currently. The states to include are as follows:

- Default (or initial) state
- Hover
- Clicked
- Disabled

<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1663%253A19010" allowfullscreen></iframe>
<figcaption>
  Button states
</figcaption>
</figure>

# Paired buttons
Put the actionable part on the right-hand side for English or other left-to-right direction languages. Reverse this for right-to-left languages such as Arabic, where the action button should be placed to the left-hand side.

<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1663%253A19061" allowfullscreen></iframe>
<figcaption>
  Paired buttons
</figcaption>
</figure>

# Corner radius
Buttons should generally try to mimic how buttons appear in the real-world. Consequently, it is best to avoid irregular shapes and simply rely upon the common rectangles, pills and squares.

Sharp buttons have a sharp, professional feel and are typically more elegant than rounded buttons.

Rounded buttons feel 'nicer' to the user - the eye follows the curves of the corners more readily than sharp button corners.

<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1663%253A19113" allowfullscreen></iframe>
<figcaption>
  Corner radius
</figcaption>
</figure>

Whichever corner radius you decide upon, you must ensure that it remains consistent across your whole site, and this means keeping a close eye on diagonal spacing between the button and the edge of neighbouring elements.

# Button text size
<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1663%253A19153" allowfullscreen></iframe>
<figcaption>
  Button text sizing
</figcaption>
</figure>

No smaller than 20px (16pt) is best, but you are free to make your button text match your base font size (often 16px or 12pt) but be careful about going any smaller than 13px (10pt) if you want the user to click it.

# Button shadows
A small, subtle shadow on a **filled** button can help it stand out more effectively for the user, giving them some indication that the element is clickable.


# Button widths
Adding around a minimum 40px (32pt) of horizontal padding outside the text / text+icon on a button gives a nice target for your users to hit. If you need to align to a grid then do so but do not go below the above rule of thumb. If you need to align a button with a form then by all means go larger too - full width buttons are acceptable if there is only one or two - e.g. 'Next step' in a multipage form.

# Examples

## Example button
<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLGqH2iAEDqig26lZ8LBGrB%2FExample-Design-System%3Fnode-id%3D1923%253A20540" allowfullscreen></iframe>
<figcaption>
  Example button
</figcaption>
</figure>

## Example code for example button
```css
// Colours
background: hsba(201, 98%, 63%, 1);
background: hsba(200, 99%, 78%, 1);
background: hsba(213, 25%, 100%, 1);
background: hsba(204, 12%, 100%, 1);
background: hsba(201, 26%, 99%, 1);
background: hsba(198, 77%, 97%, 1);
background: hsba(204, 6%, 100%, 1);

// Button */
// Auto Layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20.0388px 40.0777px;

position: static;
width: 269px;
height: 70.08px;
left: 0px;
top: calc(50% - 70.08px/2 - 23px);

// Swatches/sky/400 */
background: #38BDF8;

// Swatches/sky/50 */

border: 3.33981px solid #F0F9FF;
box-shadow: 0px 0px 12px 4px #1E416A;
border-radius: 6.67961px;

// Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 16px 0px;

// Helper text */

position: static;
width: 251px;
height: 30px;
left: 0px;
top: 86.08px;

// Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 16px 0px;
```
</div>
<div class="col-start-2 col-end-10">

{% figure '99-chat-with-agent', 'agent chat workflow', 'exploring the way user initiates a conversation with the agents.' %}

</div>
<div class="col-start-3 col-end-9">

However, things didn’t turn out as expected. I have to move to Singapore in order to pursue the position and that’s not a good timing as my wife had just giving birth to our first baby boy few months ago. I have chosen my family this time.

After all, this is quite an exciting project as I have the opportunity to work for a promising startup and learn quite a few non-technical things along the journey.

</div>