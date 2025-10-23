import AlertBox from "./components/AlertBox";
import Button from "./components/Button";
import Section from "./components/Section";
import UserProfileCard from "./components/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay";



const user = {
        id: '1',
        name: 'Booker T.',
        email: 'Booker.T@example.com',
        role: 'Awesome Guy',
        avatarUrl: 'https://variety.com/wp-content/uploads/2022/12/Screen-Shot-2022-12-06-at-2.58.14-PM.png?w=1000&h=667&crop=1&resize=910%2C607'
      };

  const product = {
    id: '1',
    name: 'Mystery Product',
    price: 1999.99,
    description: 'There is no way to tell what it is.',
    imageUrl: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001-1024x576.jpg',
    inStock: true
  };



function App() {

  return (
    <main className="h-screen flex items-center justify-center w-2/3">
      <div>
        <AlertBox 
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
        </AlertBox>
      </div>

      <div>
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">
            Last login: 2 hours ago
          </div>
        </UserProfileCard>
      </div>

      <div>
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
        >
          <div className="text-sm text-gray-500">
            Free shipping available
          </div>
        </ProductDisplay>
      </div>

      {/* <h1>Components Library</h1>

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
      </Section> */}

    </main>

  )
}

export default App;
