export const dynamicHandlers=(event,component)=>{

   return component.setState({
        [event.target.name]:event.target.value
    })
}