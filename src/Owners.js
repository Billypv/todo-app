import OwnerList from "./OwnerList"

function Owners(props){
    return(
        <div>
            <h2>Owners</h2>
            <OwnerList key={props.owners.id} owners={props.owners} currentOwner={props.currentOwner} setCurrentOwner={props.setCurrentOwner}/>
        </div>


    )
}
export default Owners