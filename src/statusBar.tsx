export const StatusBar = ({percent}: {percent: number}) => {
return (<div style={{height: 50, background: "white", width: '90%'}}>
<div style={{background: "green", height: "100%", width: `${percent * 100}%`}}>

</div>
</div>)
}
