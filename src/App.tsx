import AlertBox from "./components/AlertBox";
import Button from "./components/Button";
import Section from "./components/Section";


function App() {

  return (
    <main className="bg-stone-900 text-white">
      {/* <AlertBox 
        type='success'
        message="Your profile has been updated as expected!"
        onClose={() => alert('Alert closed')}
      >
        <p className="text-sm">You are free to continue using this application.</p>
      </AlertBox>

      <AlertBox 
        type='error'
        message="Somthing unexpected has happened!"
        onClose={() => alert('Alert closed error not yet resolved!')}
      >
        <p className="text-sm">Try to restart this application.</p>
      </AlertBox>

      <AlertBox 
        type='warning'
        message="We are having expected issues, crash impending!"
        onClose={() => alert('Alert closed, find the issues!')}
      >
        <p className="text-sm">You are free to continue using this application at your own risk.</p>
      </AlertBox>

      <AlertBox 
        type='info'
        message="Here is a fun fact, this is a react component!"
        onClose={() => alert('Now you know!')}
      >
        <p className="text-sm">You are free to continue using this application.</p>
      </AlertBox> */}

      <h1>Components Library</h1>

      <Section title='Section 1'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fuga, voluptas sequi. Eos voluptas sapiente commodi impedit, 
          fuga minima labore, ullam, reprehenderit eaque ratione iure 
          doloribus minus praesentium porro voluptate natus?</p>
      </Section>

      <Section title="Section2">
        <h3>Subheader</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Tempora explicabo, illo pariatur corrupti velit, repellat quidem 
          incidunt molestias at nesciunt atque quam sit nostrum eaque ipsum 
          ea ab eius facere.</p>
      </Section>

      <Section title='Buttons'>

        <div className="grid grid-cols-4">

          <Button text='Click me!'/>

          <Button text='Submit' type='submit' onClick={() => console.log('Submit')}/>

          <Button text='Submit' type='reset' onClick={() => console.log('Reset')}/>

          <Button text='Submit' type='reset' disabled={true} onClick={() => console.log('Reset')}/>

        </div>
      </Section>

    </main>

  )
}

export default App;
