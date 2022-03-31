const DisplayScreen = ({ contacts }) => {
    console.log(contacts)
    return ( 
        <div className="px-16 bg-gray-100 md:col-span-2 h-screen">
            <h1 className="font-bold text-slate-800">All Contacts</h1>
            {
                contacts.map(contact => (
                    <div key={contact.id} className="bg-white rounded-md overflow-hidden shadow p-3 my-3">
                        <h1>{ contact.firstname } { contact.lastname }</h1>
                        <span className="text-sm font-bold">{ contact.email }</span>
                    </div>
                ))
            }
        </div>
     );
}
 
export default DisplayScreen;