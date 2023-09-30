import './myorders.scss';


const MyOrders = () => {

  const currentUser = {
    id: 1,
    username: "hopago",
    isSeller: true,
  };

  return (
    <div className="myorders">
      <div className="container">
        <div className="title">
          <h1>My Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='productImg' src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>$ 119</td>
            <td>1</td>
            <td>
              <img className='deleteBtn' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='productImg' src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>$ 119</td>
            <td>1</td>
            <td>
              <img className='deleteBtn' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='productImg' src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>$ 119</td>
            <td>1</td>
            <td>
              <img className='deleteBtn' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='productImg' src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>$ 119</td>
            <td>1</td>
            <td>
              <img className='deleteBtn' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='productImg' src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>$ 119</td>
            <td>1</td>
            <td>
              <img className='deleteBtn' src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyOrders
