## Using the colors.js file
<ul>
<li>The colors.js file has been added in the src folder</li>
<li>It has two objects DARK_THEME and LIGHT_THEME</li>
<li>In the index.js file the variable names have been added globally to all stylesheets that might be used using the 
document.documentElement.setProperty() method
</li>
<li>In your css file, use these variables like this: <br>
#testId{<br>
  color : var(--orangeText) //where orangeText is the name of the color variable<br>
}

<li>Feel free to add more colors in the colors.js and then simultaneously in index.js(using documentElement.setProperty)</li>
</li>
</ul>
