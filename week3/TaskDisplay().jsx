// Code By - Sandeepan Chakraborty (21MIM10072)
// Week 3 - Display_Code:

// App Component to Display All Tasks

function App() {
    return (
      <div className="p-8 space-y-8">
        <h1 className="text-2xl font-bold">React.js Assignment</h1>
        <section>
          <h2 className="text-xl font-bold mb-4">Task 1: TextUpdater</h2>
          <TextUpdater />
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Task 2: LogForm</h2>
          <LogForm />
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Task 3: UserCard</h2>
          <UserCard name="Sandeepan Chakraborty" email="sandeepan.chakraborty2021@vitbhopal.ac.in" />
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Task 4: CustomButton</h2>
          <CustomButton />
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Task 5: LoginForm</h2>
          <LoginForm />
        </section>
      </div>
    );
  }
  
  export default App;
  