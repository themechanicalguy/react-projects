import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "1",
      label: "Learn JavaScript in 10 days",
      content:
        "JavaScript is not that easy to learn in 10 days Irure consectetur commodo elit officia id. Dolore reprehenderit commodo ea laboris cupidatat ullamco non deserunt Lorem labore mollit dolor et anim. Id sunt elit duis eiusmod dolore laboris. Tempor duis velit deserunt ad excepteur Lorem. Commodo quis consequat amet consequat adipisicing cupidatat elit do Lorem aliquip deserunt deserunt eu. Pariatur esse ad exercitation eu fugiat minim incididunt. Fugiat consequat aliquip est anim anim ex incididunt dolor est ea non laboris pariatur nulla.",
    },
    {
      id: "2",
      label: "Learn React in 100 days",
      content:
        "React is easy to learn in 100 days Minim eu dolor elit sint exercitation. Nulla voluptate ut cupidatat commodo incididunt tempor elit laborum. Laboris Lorem qui duis excepteur reprehenderit deserunt magna magna magna nulla. Commodo fugiat sunt nulla esse consequat duis proident Lorem id. Cillum adipisicing magna ipsum laborum laboris velit anim.",
    },
    {
      id: "3",
      label: "Learn HTML in 10 days",
      content:
        "Ok then do it  loremCillum est eiusmod commodo nostrud laborum aliqua magna adipisicing. Quis commodo dolore ipsum sint culpa velit aliqua deserunt. Nisi ex eu veniam culpa cupidatat anim consectetur. Id irure ut elit labore nisi enim minim sit aliquip sunt laboris nisi aliquip laboris. Proident aliqua duis commodo proident proident deserunt commodo consequat proident amet. Eu nisi proident anim sit enim ex minim anim do Lorem anim et. Excepteur cillum magna occaecat laboris aliquip aliqua laboris labore cupidatat ut id.",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
