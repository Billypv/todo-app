function OwnerList(props){
    return(
        <ul>
            {props.owners.map((owner)=> {
                return <button onClick={() => props.setCurrentOwner(owner)}>Owner {`${owner.id} ${owner.name}`}</button>
            })}
        </ul>
    )
}

export default OwnerList