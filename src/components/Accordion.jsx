import "../style/Accordion.css";

const Accordion = () => {
  return (
    <>
      <div className="accordion">
        {accordionData.map((items, index) => {
          <div className="items">
            <div className="title">
              <p>
                <b>{items.question}</b>
              </p>
            </div>
            <div className="content">
              <p>{items.answer}</p>
            </div>
          </div>;
        })}
      </div>
    </>
  );
};

const accordionData = [
  {
    question: "Best useful links?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sit minus quaerat quia? Veritatis incidunt dolorem accusantium cum adipisci iste nostrum saepe facere officia, vero hic sint sequi, quae optio!",
  },
  {
    question: "How does this work?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sit minus quaerat quia? Veritatis incidunt dolorem accusantium cum adipisci iste nostrum saepe facere officia, vero hic sint sequi, quae optio!",
  },
  {
    question: "Why is Villa Agency the best?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sit minus quaerat quia? Veritatis incidunt dolorem accusantium cum adipisci iste nostrum saepe facere officia, vero hic sint sequi, quae optio!",
  },
];
export default Accordion;
