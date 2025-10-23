# Reflection Questions

How did you handle optional props in your components?
-For optional props I used the ternary operator to display information or data based on the value of that prop.

What considerations did you make when designing the component interfaces?
-I thought about how the information on each component was meant to be consumed and layed out the JSX as I would traditionl HTML so it can be stlyes appropriately in the future.

How did you ensure type safety across your components?
Interfaces and types were instrumental in insuring type sfety in this build.

What challenges did you face when implementing component composition?
- The main challenge I face here was passing user data and understanding that a lot of these functions are just placeholders for functions that part confused me even thoug in hindsight it shouldn't have.


## Component Use Instructions
To use the AlertBox component in the App.tsx(or abother page where you want to us it) manually pass it the components make sure the required props are passed. You can add styles to differentiate visually between the alert types, optionally.

To use the UserProfileCard component, pass it some user data as well as optional props. Based on that data and props a user card will display user information as directed by the prop.

To use the Product Display it is the same, pass it data and props, some of which will be optional and based on those data certian informatiob will be displayed to the user.