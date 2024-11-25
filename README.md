# Animations Practice

Our **pizza website** has event listeners and onclick features, which are cool, but it might be hard to figure out that clicking on the pictures changes their color. How about add a few animations to make it easier to tell that clicking can do things!

When we hover over any of the pizza pictures, they should get dimmer, which should tell the user that clicking them will do something! 

To add some more fun, let's add a quick starting animation that changes the background color from black to white when the page loads!

Let's add this cool function using CSS only!
### Tasks:

1. Use the hover pseudo class to make the pizza images darker when hovered. Use the css property: ```filter: brightness(0.8);``` to make it darker.

2. Use the active pseudo class to make the image brighter when clicked. Use ```opacity: 0.8;``` to make it brighter.

3. Make the description text get bigger when you hover over it. Use ```font-size: 18px``` for this.

4. As a bonus, add ```transition: font-size 0.3s ease;``` to the #description's properties to make the size change smooth!

5. Add a new animation keyframe called background that changes the background color from black to white.

```
@keyframes background {
    from {background-color: black;}
    to {background-color: white;}
}
```
6. Assign this new animation to the body element, using the **animation-name** property.

7. Finally, change the **animation-duration** property to be 1 second, so it takes 1 second to go from black to white.

