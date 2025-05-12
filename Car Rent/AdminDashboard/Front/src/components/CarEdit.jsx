import { useEffect, useState } from "react";
function CarEdit({id, style, onClose}){
    const [upd, setUpd] = useState(
        {
            status: '',
            price: ''
        }
    )
function isEmpty(){
    if(upd.price.trim.length === 0 && upd.status.length === 0){
        alert("PRICE OR STATUS CANNOT BE EMPTY");
    }
    return true
}
    function HandleSubmit(e){
        e.preventDefault();
        if(isEmpty(upd)){
            fetch('http://localhost:8080/cars/edit/' + id, {method: "PATCH", headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(upd)
              ,})
            .then(res => res.json())
            .then(data => {onClose(),window.location.reload();
            })
            .catch(err => console.error(err))
        }
     }
    return(
        <div style={{display: style}}>
            <form onSubmit={HandleSubmit}>
                <section className="flex gap-10">
            <input type="text" name="price" value={upd.price} onChange={(e) => setUpd({...upd, price: e.target.value})} />
            <select name="status" value={upd.status} onChange={(e) => setUpd({...upd, status: e.target.value})}>
                <option disabled></option>
                <option value="Available">Available</option>
                <option value="Rented">Rented</option>
            </select>
            <button type="submit" onClick={HandleSubmit}>Update</button>
                </section>
            </form>
    </div>
    );
}
export default CarEdit;