const Buttons = ({ onClickOfButtons, onClickOfEqualButtons }) => {
    return (
        <div>
            <button className='btn' onClick={onClickOfButtons}>1</button>
            <button className='btn' onClick={onClickOfButtons}>2</button>
            <button className='btn' onClick={onClickOfButtons}>3</button>
            <button className='btn' onClick={onClickOfButtons}>4</button>
            <button className='btn' onClick={onClickOfButtons}>5</button>
            <button className='btn' onClick={onClickOfButtons}>6</button>
            <button className='btn' onClick={onClickOfButtons}>7</button>
            <button className='btn' onClick={onClickOfButtons}>8</button>
            <button className='btn' onClick={onClickOfButtons}>9</button>
            <button className='btn' onClick={onClickOfButtons}>0</button>
            <button className='btn' onClick={onClickOfButtons}>+</button>
            <button className='btn' onClick={onClickOfButtons}>-</button>
            <button className='btn' onClick={onClickOfButtons}>*</button>
            <button className='btn' onClick={onClickOfButtons}>/</button>
            <button className='btn' style={{width: '206px'}} onClick={onClickOfEqualButtons}>=</button>
        </div>
    )
}

export default Buttons
