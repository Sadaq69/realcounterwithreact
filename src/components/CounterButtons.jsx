import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CounterButtons({ setCount, count }) {
  return (
    <>
      <div className="button-container">
        <button className="count-btn" onClick={() => setCount(count<=0? 0:count-1)}>
          <MinusIcon className="count-btn-icon" />
        </button>
        <button className="count-btn" onClick={() => setCount(count>=5? 5:count+1)}>
          <PlusIcon className="count-btn-icon" />
        </button>
      </div>
    </>
  );
}