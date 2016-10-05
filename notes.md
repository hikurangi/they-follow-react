# they follow
https://www.youtube.com/watch?v=hacSltkpNy8

## sprints/objectives

### 'Release 1'

[x] render the map inside App
[x] render title text over map
[x] centre the map on the user's location
[ ] get map to align properly? ~ somewhat solved with flex-box!

### 'Release 2'

[ ] refine map - make it fullscreen
[ ] spawn a random point on the map (I know how, but where?)
[ ] add that point to a database *** - 'state' is more relevant when I implement a login system
[ ] have that point move toward the user
[ ] navigate the map using touch-style controls (pinch/scroll wheel zoom, click + drag)

### 'Release 3'

[ ] implement authorization system
[ ] implement a database for authorization and tracking of followers

### 'Release 4'

[ ] multiplayer mechanic - sic the 'follower(s)' on to your friends or enemies!

## learning outcomes

1. It would have been nice to have more time (there are only 24 hours in a day). Considering these weeks have included some of the most unpleasant/generally shitty experience(s) of my life... I did what I could.

2. CSS is a huge rabbit-hole for me, but essential for this style of 'game'.

3. I really want to continue with this. I love the concept. I just wish it lined up more with the learning content of this course. There are better concepts for learning what we've covered here.

4. Another big block was around the API itself. Deciding:
  * which React API to use for Mapbox - thanks Simon for introducing me to npmcompare.com which was invaluable. FWIW, react-map-gl is Uber's module of choice, and it has been good to use so far.
  * whether wrapping the 'vanilla' client-side API js in a React component was the way to go or not.
  
5. Responsiveness with a map API in React is really hard:
```js
window.addEventListener('resize', this._onWindowResize)
this.state = {width: window.innerWidth}
```
  seems to be the way to go.
