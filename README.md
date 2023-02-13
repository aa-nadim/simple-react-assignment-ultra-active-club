# Simple React Assignment Ultra Active Club

Resource link==> https://github.com/ProgrammingHero1/ultra-active-club

1. How Does React Work?

==> ReactJS works by `creating and managing a virtual representation of the user interface`, called the `virtual DOM`. When the `state` of the application `changes`, ReactJS efficiently `updates` the `virtual DOM`, and then `selectively updates only the parts of the actual DOM that have changed`. This helps to reduce the amount of unnecessary updates and improve the performance of the application. ReactJS also encourages the use of reusable components, which can be composed together to create complex user interfaces.

2. Difference between props and state in ReactJS?

==> In ReactJS, props and state are both used to manage data in a component, but they have different purposes and characteristics.

Props (short for "properties") are used `to pass data from a parent component to a child component`. Props are `read-only` and `cannot be modified by the child component`. Props are defined in the parent component and are passed down to the child component as an attribute. Props are useful for creating reusable components that can be customized for different use cases.

State, on the other hand, is used `to manage data that can change within a component`. State is `mutable` and can be updated using the setState method. State is defined within a component and can only be accessed and modified by that component. State is useful for managing data that needs to be updated in response to user interactions or other events.

In summary, props are used `to pass data` from a parent to a child, while state is used `to manage data` within a component. `Props are read-only` and cannot be modified, while `state is mutable` and can be updated using the setState method.

3. What is `useEffect` used for in ReactJS?

==>The useEffect hook in ReactJS is used `to manage side effects in functional components`. A side effect is any operation that modifies something outside the scope of the component, such as interacting with the browser DOM, setting up timers or subscriptions, or fetching data from an external API. The useEffect hook allows you to perform these side effects after the component has rendered.

The useEffect hook takes two arguments: a function that performs the side effect, and an array of dependencies that the function depends on. The function is called after the component has rendered, and it can return a cleanup function to undo the effects of the side effect. The dependencies array specifies which values the function depends on, and the function is only called when these values change.

useEffect can be used for various tasks, such as setting up and tearing down event listeners, managing animations, interacting with third-party libraries, and updating the title or other metadata of the page. It is a powerful tool for managing side effects in functional components and can help to keep your code clean and maintainable.
