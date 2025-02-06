# State Forms - Assignment

**Objective:**

Learn how to use `useState` to manage form state in React and dynamically render a Contact Card with the entered data. This assignment will guide you through creating a form, managing its state, and displaying the form data in a styled Contact Card using Bootstrap.

**Requirements:**

1. **Application Structure:**

- **App Component:** The main component where the form will be managed and the Contact Card will be displayed.
- **Form Component:** A component to handle the form inputs and submission.
- **Contact Card Component:** A component to display the entered form data as a contact card.

2. **Form State Management:**

- Use state to manage form fields.
- Optional but recommended: Manage all form fields in a single state object.

### Steps

1. **Set Up Your Project:**

- Open the terminal to the `assignment` directory--the simplest way to do so is to right-click on the `assignment` folder in VS Code and select "Open in Integrated Terminal".

- In the terminal, type `npm create vite .` and hit enter/return. The `.` is important--this will create a new Vite project in the current directory.

- It will warn you that there are files here currently. Use the arrow keys and Enter/Return to select "Ignore files and continue". This allows us to keep our readme and any data/assets files we have in our new project folder.

- Choose React and then JavaScript from the following menus, using arrow keys and Enter/Return.

- Install dependencies by entering `npm install` in the terminal.

- Run the app by typing `npm run dev` in the terminal. This will provide a clickable link to open the app in your default browser, or you can navigate to the localhost URL in your browser.

2. **Install Bootstrap:**

- In the terminal, install Bootstrap by running:

```bash
npm install bootstrap
```

- Import Bootstrap into your project. In **/src/main.jsx** or **/src/App.jsx**, add the following line:

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

- Remove the import of `index.css` in `main.jsx` and _all_ imports in `App.jsx`.

3. **Create the Form Component:**

- In the **/src/** folder, create a new file named `Form.jsx`.
- Inside this file, define a functional component named `Form`.
- Add a form structure (the HTML is below) with fields for:
  - Name
  - Email
  - Age
  - Gender (with inclusive options)
  - Whether to subscribe the user to a newsletter.

Here’s the HTML structure for the form:

```html
<form>
  <div>
      <label>Name:</label>
      <input type="text" name="name" />
  </div>
  <div>
      <label>Email:</label>
      <input type="email" name="email" />
  </div>
  <div>
      <label>Age:</label>
      <input type="number" name="age" />
  </div>
  <div>
      <label>Gender:</label>
      <div>
          <label>
              <input type="radio" name="gender" value="male" /> Male
          </label>
          <label>
              <input type="radio" name="gender" value="female" /> Female
          </label>
          <label>
              <input type="radio" name="gender" value="non-binary" /> Non-binary
          </label>
          <label>
              <input type="radio" name="gender" value="prefer-not-to-say" /> Prefer not to say
          </label>
      </div>
  </div>
  <div>
      <label>Subscribe to newsletter:</label>
      <input type="checkbox" name="isSubscribed" />
  </div>
  <button type="submit">Submit</button>
</form>
```

4. **Initialize State for the Form Fields:**

- Inside the `Form` component, use `useState` to create a state object to manage all form fields:
  - `name`
  - `email`
  - `age`
  - `gender`
  - `isSubscribed`
  
5. **Handle Changes in Form Fields**

- Either define a separate function for each field where you handle a change in that field and update the state for that field only, or define a single dynamic handler function to update the state based on whatever form field it's working with, based on its `name` attribute.
- Add your state-updating change handlers to each form field in the JSX.
- Log the current state to the console, and, back in the browser, input something for each form field manually to confirm that the state updating works. It's possible that the state will be one step behind the form fields, but that's okay--remember that `useState` is asynchronous.

6. **Handle Form Submission:**

In the App component:

- Remove all code inside the `App` function. Remove all imports if you didn't do so earlier.
- Define a function to handle form submission. For now, this function should just log its argument (which will be the form data) to the console.
- Render the `Form` component and pass down the above function as a prop.

7. **Add the Form Submission Handler:**

In the Form component:

- Add a form submission handler that prevents the default form submission behavior by calling the `event.preventDefault` method and then passes the form state to the function it receives as a prop from App.
- Confirm that your app is logging the submitted form data.

8. **Create the Contact Card Component:**

- In the **/src/** folder, create a new file named `ContactCard.jsx`.
- Inside this file, define a functional component named `ContactCard`.
- This component will receive the form data as props and display it in a styled contact card format.

9. **Define the Contact Card Structure:**

In the Contact Card component, take the data in as props and display it in interface elements for the following fields:

- Name
- Email
- Age
- Gender
- Subscribe to newsletter status

10. **Render the Contact Card:**

- In the `App` component, render the `ContactCard` component. Don't render it if there is no submitted form data (i.e., conditionally render it)
- Change the form submission function so that instead of logging the data, it passes it down as props to the `ContactCard` component.
- Style the card, making it visually appealing. One way you could go is the [Bootstrap's Card component](https://getbootstrap.com/docs/5.3/components/card/), but feel free to use your own styles or another set of Bootstrap components.

11. **Check Your Browser:**

- Save all your files and check your browser. You should be able to enter data into the form, submit it, and see it displayed in a styled contact card format.
