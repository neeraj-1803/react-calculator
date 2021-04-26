const Screen = ({letters, equal}) => {
    console.log("equal--"+equal);
    const eq = equal;
    return (
        <div className="task">
            <h5>{eq !== 0 ? letters : '0'}</h5>
            <h3><p>{(eq === 0) ? ((letters.length ===0) ? '0' : letters) : eq}</p></h3>
        </div>
    )
}

export default Screen
