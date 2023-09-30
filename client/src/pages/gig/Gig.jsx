import "./gig.scss";
import { Slider } from "infinite-react-carousel";


const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <div className="bradCrumbs">Horeelance | Graphics & Design</div>
          <h1>I will create AI generated art for you</h1>
          <div className="user">
            <img
              className="profilePicture"
              src="https://images.pexels.com/photos/9504690/pexels-photo-9504690.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <span>Hopago</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/10884424/pexels-photo-10884424.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/12328821/pexels-photo-12328821.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1770706/pexels-photo-1770706.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
          </Slider>
          <h2>About this gig</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga odio
            delectus fugit pariatur nihil ab quae molestias voluptas veniam eum?
            Optio est cumque eum ab nesciunt doloribus quae dolore id.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/9504690/pexels-photo-9504690.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <div className="info">
                <span>Hopago</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">KOR</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Average Response Time</span>
                  <span className="desc">4 Hours</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">Korean, English</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                eum inventore pariatur, at veniam corporis minus velit iure
                mollitia beatae vitae quisquam ratione quae. Quasi minima
                aliquam explicabo facere accusamus.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="profilePicture"
                  src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt=""
                />
                <div className="info">
                  <span>Dopago</span>
                  <div className="country">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1600px-Flag_of_the_United_States.svg.png?20151118161041"
                      alt=""
                    />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique nam quod distinctio inventore, voluptatibus ea, ad
                saepe reprehenderit, ducimus atque quidem. Culpa libero numquam
                natus itaque perferendis a est modi?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="profilePicture"
                  src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt=""
                />
                <div className="info">
                  <span>Dopago</span>
                  <div className="country">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1600px-Flag_of_the_United_States.svg.png?20151118161041"
                      alt=""
                    />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique nam quod distinctio inventore, voluptatibus ea, ad
                saepe reprehenderit, ducimus atque quidem. Culpa libero numquam
                natus itaque perferendis a est modi?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="profilePicture"
                  src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt=""
                />
                <div className="info">
                  <span>Dopago</span>
                  <div className="country">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1600px-Flag_of_the_United_States.svg.png?20151118161041"
                      alt=""
                    />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique nam quod distinctio inventore, voluptatibus ea, ad
                saepe reprehenderit, ducimus atque quidem. Culpa libero numquam
                natus itaque perferendis a est modi?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, a?
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Spent</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
