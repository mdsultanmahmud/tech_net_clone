import { decrement, decrementByAmount, increment, incrementByAmount } from '../../redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
const Counter = () => {
    const {value} = useAppSelector((state)=> state.counter );
    const dispatch = useAppDispatch()
    
    return (
        <div className="bg-[#EC19EF] min-h-screen w-full grid place-items-center">
            <div className="py-[3rem] w-[65%] rounded-2xl shadow-2xl bg-white text-center">
                <h1 className="font-bold mb-12 text-2xl text-[#EC19EF]">Count: {value}</h1>
                <button onClick={() =>dispatch(increment())} className="px-4 py-2 text-sm font-bold text-[#EC19EF] hover:text-white shadow-lg bg-black rounded-lg mx-3 my-2 hover:bg-[#EC19EF] translate duration-2000">Increment</button>
                <button onClick={() => dispatch(decrement())} className="px-4 py-2 text-sm font-bold text-[#EC19EF] hover:text-white shadow-lg bg-black rounded-lg mx-3 my-2 hover:bg-[#EC19EF] translate duration-2000">Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(5))} className="px-4 py-2 text-sm font-bold text-[#EC19EF] hover:text-white shadow-lg bg-black rounded-lg mx-3 my-2 hover:bg-[#EC19EF] translate duration-2000">IncrementByAmount</button>
                <button onClick={() => dispatch(decrementByAmount(5))} className="px-4 py-2 text-sm font-bold text-[#EC19EF] hover:text-white shadow-lg bg-black rounded-lg mx-3 my-2 hover:bg-[#EC19EF] translate duration-2000">DecrementByAmount</button>
            </div>
        </div>
    );
};

export default Counter;