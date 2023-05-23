let score = 0;
let wicket = 0;
let BallWiseres = [];                                                  // add empty array 
let hit = 0; 
let inputref = React.createRef();                                     // create new reference for comment


///////////////////// Here we use to method to count Score one as follow ////////////////////////////////////////


// This method is getting repetable for every btn //
function clickone (){                                                    // function for count
    score += 1;                                                          // increase score by 1
    rootElement.render(<App/>)                                           // Rerender score and update score
    console.log(score);                                                  // to show score in console
}

// This method is useful as it pass by num so it only increase num number we click //

function Addscore (num){                                                  // function to addscore by num pass 
    hit = num;
    // if(wicket < 10){
    //  BallWiseres.push(num);                                               // pushing runs in array
    // score += num;                                                         // increase score
     rootElement.render(<App/>)                                               // render app again
    console.log(hit);                                                // print score
         
}


// This method is same as Above for wicket count //
function AddWicket(){
    hit = "w";
    // BallWiseres.push("W");                                                   // pushing wicket in array
    // if(wicket < 10){
    // wicket += 1;
    rootElement.render(<App />)
    console.log(hit);
    }


const ScoreCard = () => (                                                  // create arrow function for btns //

    <div>
    <button onClick = {() => Addscore(0)}>0</button>
    <button onClick = {() => Addscore(1)} >1</button>                                   
    <button onClick = {() => Addscore(2)}>2</button>
    <button onClick = {() => Addscore(3)}>3</button>
    <button onClick = {() => Addscore(4)}>4</button>
    <button onClick = {() => Addscore(5)}>5</button>
    <button onClick = {() => Addscore(6)}>6</button>
    <button onClick = {AddWicket}>Wicket</button>
</div>

)

const Result = () => (
    <div>
        {BallWiseres.map((res,index) => (                                            // ballwiseres -> as res & index as arr index and here if index is more than 6 than break line
                                                                                    //and in span if res is == 0 then show dot(.) otheerwise show res  and lastly is for gap &nbsp
            <>
            {index %6 === 0? <br />: null}                                           

        <span key ={index}>{res === 0 ? <strong>.</strong> : res}</span>&nbsp;&nbsp;&nbsp; </>))}
                                                                                   

    </div>
)

function handlesubmit(event){                                                              // prevent function to submit btn to stop from reload
    event.preventDefault();

    if(hit == "w"){
        wicket += 1;
    }else{
        score += hit;
    }

    BallWiseres.unshift(
        // <span>{hit}{","}{inputref.current.value}</span>
    <span>{`${hit}, ${inputref.current.value}`}</span>
        );                                                              // to move hit downside when add new hit

        hit =0;
        inputref.current.value ="";                                      // for making input box clean
    
    console.log(inputref.current.value)                                                    // printing ref value in console
    rootElement.render(<App/>);                                                            // rerender app again

}


const Form = () => (                                                                         // passing func to submit of form to pervent its nature
    <form onSubmit = {handlesubmit}>                                                        
        <input value = {hit}/>
        <input ref ={inputref} placeholder ="Add comment"/>                                   
        <button>Submit</button>                                                                
    </form>
)

const App = () =>(
    <>
    <h1>SCORE KEEPER</h1>

    <h2>Score : {score}/{wicket}</h2>
         <ScoreCard />      
         <br />
         <Form/>                                                                                                                                                      

         <hr />




{/* showing of ballwise result */}

         <div>
            {BallWiseres.map((res,index) =>(
                <p key = {index}>{res}</p>
            ))}
         </div>



         {/* <Result />  */}
    
    
    </> 
    
                                                                                                            //  render arrow function here //
)

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>)


// Here in line no 38 from we use inline function *[() => Addscore(2)]*  while use normal function it is iterable and nonstopping
// Here we Use onClick eventhandler 
