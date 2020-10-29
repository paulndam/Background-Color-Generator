import React, {useState} from 'react';
import './color.css';
import ColorBaloons from '../Images/ColorBaloons.jpeg';

const Color = props => {
  const [color, setcolor] = useState ('');

  //  function to apply changes to color

  const ChangeColor = e => {
    e.preventDefault ();

    document.body.style.background = color;
    props.newColor (color);

    setcolor ('');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <img className="Dimes" src={ColorBaloons} alt="picture" />

        </div>
        <div className="card-text">
          <span class="comment">Have Fun</span>

          <form onSubmit={ChangeColor}>
            <div className="form-group">
              <label for="Color">Colors</label>
              <select
                className="form-control"
                id="color"
                onChange={e => setcolor (e.target.value)}
              >

                <option />
                <option id="red" value="red">red</option>
                <option id="green" value="green">green</option>
                <option id="yellow" value="yellow">yellow</option>
                <option id="blue" value="blue">blue</option>
                <option id="black" value="black">black</option>
                <option id="orange" value="orange">orange</option>
                <option id="purple" value="purple">purple</option>
                <option id="pink" value="pink">pink</option>
                <option id="brown" value="brown">brown</option>
                <option id="grey" value="grey">grey</option>

              </select>

            </div>

            <button type="submit" className="btn">
              Add Color
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Color;
