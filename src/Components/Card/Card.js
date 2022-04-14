import React, { useState, useEffect } from 'react';
import Input from '../Inputs/Input';
const Card = (props) => {
  const [city, setCity] = useState(null);
  const [dis, setDis] = useState(null);
  const [search, setSearch] = useState('london');
  useEffect(() => {
    const featchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2d27aad48daac2645f19d5db24e9516d`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      setDis(resJson.weather[0].description);
    };

    featchApi();
  }, [search]);

  const getLocationHandler = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
    if (dis === 'clear sky') {
      return (
        <div className="svg-contain">
          <svg
            className="hurricane-svg"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="-437 254.4 85 52.6"
            style={{ enableBackground: 'new -437 254.4 85 52.6' }}
            xmlSpace="preserve"
          >
            <path
              className="cloud"
              d="M-361.9,280.5c1.4,0,2.6,0.7,3.4,1.7h1.1c0.4-8.2-5.9-10.8-5.9-10.8c-2.2-1.5-5.4-1-5.4-1
  c-0.1-4.1-2.9-7.4-2.9-7.4c-4.7-5.5-10.3-4.9-10.3-4.9c-7.4-0.2-11,5.9-11,5.9c-5.6-4-14.3-2.6-18.2,3.1c-0.7,1.1-1.3,2.2-1.8,3.4
  c0,0.1-0.3,1.2-0.4,1.2c3.5-0.6,6.6,1.6,6.6,1.6s1.1-1.1,1.2-1.3c2.4-2.4,5.6-3.6,9-3.2c4.4,0.5,8.5,3,9.9,7.4
  c0.1,0.2,0.8,2.4,0.6,2.4c5.3,0.1,7.3,3.6,7.3,3.6h13.4C-364.5,281.2-363.3,280.5-361.9,280.5z"
            />
            <path
              className="cloud"
              d="M-386,279.6c-0.2,0-0.4,0-0.6,0.1c-0.1-0.8-0.2-1.7-0.4-2.4c-0.3-1-0.8-2-1.4-2.9c-2-2.9-5.3-4.8-9-4.8
  c-2.3,0-4.4,0.7-6.1,1.9c-0.6,0.4-1.1,0.8-1.6,1.3c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.5-0.6,0.8c-1.8-1.2-3.9-1.9-6.2-1.9
  c-5.5,0-10,4-10.8,9.3c-3.5,1-6.1,3.9-6.6,7.6h26.3h12.7h2.3l4.7-6.2c0.6-0.8,1.7-0.9,2.5-0.3s0.9,1.7,0.3,2.5l-3.1,4h0.5h5.6h0.7
  c0.1,0,0.2-0.4,0.2-1.1C-377.4,283.5-381.3,279.6-386,279.6z"
            />
            <polyline
              className="lightening"
              points="-382.8,284.2 -387.9,290.9 -380.6,291.2 -387.9,302 "
            />
            <path className="line" d="M-426.9,294.4l-5.1,7.3" />
            <path className="line" d="M-420.8,294.4l-5.1,7.3" />
            <path className="line" d="M-415.4,294.4l-5.1,7.3" />
            <path className="line" d="M-409.9,294.4l-5.1,7.3" />
            <path className="line" d="M-404.5,294.4l-5.1,7.3" />
            <path className="line" d="M-399.1,294.4l-5.1,7.3" />
            <path className="line" d="M-393.7,294.4l-5.1,7.3" />
            <path className="line" d="M-388.2,294.4l-5.1,7.3" />
            <g>
              <path className="little-path path-1" d="M-374.8,287.2h10.6" />
              <path className="little-path path-2" d="M-373.8,289.3h10.9" />
              <path
                className="big-path"
                d="M-376,288.3c0,0,14,0,14,0c1.7,0,3.1-1.4,3.3-3.1c0-0.5,0-1-0.3-1.4c-0.9-2.3-4.1-2.7-5.6-0.7
    c-0.4,0.6-0.7,1.3-0.7,1.9"
              />
              <path
                className="little-path path-3"
                d="M-364.1,285c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2"
              />
            </g>
          </svg>
        </div>
      );
    } else if (dis === 'smoke') {
      console.log('smoke');
      return (
        <div className="svg-contain">
          <svg
            version="1.1"
            className="clear-sky-svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 72.3 52.6"
            style={{ enableBackground: 'new 0 0 72.3 52.6' }}
            xmlSpace="preserve"
          >
            <g>
              <path
                className="sun"
                d="M50.8,25.7c0,7.9-6.4,14.4-14.4,14.4s-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4S50.8,17.8,50.8,25.7z"
              />
              <path className="line big-path line-1" d="M54.5,25.8h6" />
              <path className="line big-path line-2" d="M12.4,25.8h6" />
              <path className="line big-path line-3" d="M36.5,44.3v6" />
              <path className="line big-path line-4" d="M36.5,8.2v-6" />
              <path className="line big-path line-5" d="M23,38.8l-4.8,4.8" />
              <path className="line big-path line-6" d="M54.9,8.9L50,13.8" />
              <path className="line big-path line-7" d="M50,38.8l4.4,4.4" />
              <path className="line big-path line-8" d="M18.8,9.6l4.2,4.2" />
            </g>
          </svg>
        </div>
      );
    } else if (dis === 'haze') {
      console.log('few clouds');
      return (
        <div className="svg-contain">
          <svg
            className="overcast-clouds"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 82.6 52.3"
            style={{ enableBackground: 'new 0 0 82.6 52.3' }}
            xmlSpace="preserve"
          >
            <g id="Layer_1">
              <path
                className="cloud-still"
                d="M21.8,24.2c0.1,0,0.3-1.1,0.4-1.2c0.5-1.2,1.1-2.4,1.8-3.4c3.9-5.7,12.6-7.1,18.2-3.1c0,0,3.7-6,11-5.9
      c0,0,5.6-0.6,10.3,4.9c0,0,2.8,3.3,2.9,7.4c0,0,3.2-0.5,5.4,1c0,0,6.2,2.6,5.9,10.8H56.3c0,0-2-3.5-7.3-3.6c0.2,0-0.5-2.2-0.6-2.4
      c-1.4-4.4-5.5-6.9-9.9-7.4c-3.4-0.4-6.6,0.8-9,3.2c-0.1,0.1-1.2,1.3-1.2,1.3S25.3,23.6,21.8,24.2z"
              />
              <path
                className="cloud-still"
                d="M57.6,40.7c0-4.8-3.9-8.6-8.6-8.6c-0.2,0-0.4,0-0.6,0.1c-0.1-0.8-0.2-1.7-0.4-2.4c-0.3-1-0.8-2-1.4-2.9
      c-2-2.9-5.3-4.8-9-4.8c-2.3,0-4.4,0.7-6.1,1.9c-0.6,0.4-1.1,0.8-1.6,1.3c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.5-0.6,0.8
      c-1.8-1.2-3.9-1.9-6.2-1.9c-5.5,0-10,4-10.8,9.3c-3.5,1-6.1,3.9-6.6,7.6h26.3h12.7h12.9h0.7C57.6,41.8,57.6,41.4,57.6,40.7z"
              />
            </g>
            <g id="Layer_2"></g>
          </svg>
        </div>
      );
    } else if (dis === 'haze') {
      console.log('haze');
      return (
        <div className="svg-contain">
          <svg
            version="1.1"
            className="windy-svg"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="-447 254.4 64 52.6"
            style={{ enableBackground: 'new -447 254.4 64 52.6' }}
            xmlSpace="preserve"
          >
            <g id="Layer_1_1_">
              <g>
                <path
                  className="st0 little-path path-1"
                  d="M-429.2,276.8h6.3"
                />
                <path
                  className="big-path big-path-1"
                  d="M-438.1,279.3c0,0,20.5,0,20.6,0c4.1,0,7.4-3.4,7.7-7.4c0.1-1.1-0.1-2.3-0.6-3.3c-2.2-5.4-9.8-6.3-13.3-1.7
              c-1,1.3-1.6,3-1.7,4.6"
                />
                <path
                  className="little-path path-2"
                  d="M-422.6,271.7c0-2.8,2.3-5.1,5.1-5.1s5.1,2.3,5.1,5.1c0,2.8-2.3,5.1-5.1,5.1"
                />
              </g>
              <g>
                <path className="little-path path-3" d="M-434.1,284.9h30.4" />
                <path className="little-path path-4" d="M-410.6,280h8.7" />
                <path
                  className="big-path big-path-2"
                  d="M-442.9,282.7h44c3.6,0,6.6,3,6.8,6.5c0.1,1-0.1,2-0.5,3c-2,4.8-8.7,5.5-11.8,1.5c-0.9-1.2-1.4-2.6-1.5-4.1"
                />
                <path
                  className="little-path path-5"
                  d="M-403.4,289.4c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5s-2-4.5-4.5-4.5"
                />
              </g>
            </g>
          </svg>
        </div>
      );
    } else if (dis === 'haze') {
      return (
        <div className="svg-contain">
          <svg
            version="1.1"
            className="snow-svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 70.3 52.6"
            style={{ enableBackground: 'new 0 0 70.3 52.6' }}
            xmlSpace="preserve"
          >
            <g id="Layer_1">
              <path
                className="cloud"
                d="M63.9,30.9c0-5.2-4.2-9.4-9.4-9.4c-0.2,0-0.4,0.1-0.7,0.1c-0.1-0.9-0.2-1.8-0.5-2.7c-0.3-1.1-0.9-2.2-1.5-3.1
  c-2.1-3.2-5.8-5.3-9.9-5.3c-2.5,0-4.8,0.7-6.7,2c-0.6,0.4-1.2,0.9-1.8,1.5c-0.3,0.3-0.5,0.6-0.8,0.8c-0.2,0.3-0.5,0.6-0.7,0.9
  c-1.9-1.3-4.2-2.1-6.7-2.1c-6,0-10.9,4.4-11.8,10.1c-3.8,1.1-6.7,4.3-7.2,8.3h28.7h13.9H63h0.8C63.9,32.1,63.9,31.7,63.9,30.9z"
              />
              <g className="snowflake">
                <line
                  className="snowflake-path big-path"
                  x1="10.3"
                  y1={37}
                  x2="10.3"
                  y2="43.5"
                />
                <line
                  className="snowflake-path big-path"
                  x1="13.5"
                  y1="40.3"
                  x2={7}
                  y2="40.3"
                />
                <g>
                  <line
                    className="snowflake-path big-path"
                    x1="12.6"
                    y1={38}
                    x2={8}
                    y2="42.6"
                  />
                  <line
                    className="snowflake-path big-path"
                    x1="12.6"
                    y1="42.6"
                    x2={8}
                    y2={38}
                  />
                </g>
              </g>
              <g className="snowflake">
                <line
                  className="snowflake-path big-path"
                  x1="22.7"
                  y1={37}
                  x2="22.7"
                  y2="43.5"
                />
                <line
                  className="snowflake-path big-path"
                  x1="25.9"
                  y1="40.3"
                  x2="19.4"
                  y2="40.3"
                />
                <g>
                  <line
                    className="snowflake-path big-path"
                    x1={25}
                    y1={38}
                    x2="20.4"
                    y2="42.6"
                  />
                  <line
                    className="snowflake-path big-path"
                    x1={25}
                    y1="42.6"
                    x2="20.4"
                    y2={38}
                  />
                </g>
              </g>
              <g className="snowflake">
                <line
                  className="snowflake-path big-path"
                  x1="35.2"
                  y1={37}
                  x2="35.2"
                  y2="43.5"
                />
                <line
                  className="snowflake-path big-path"
                  x1="38.4"
                  y1="40.3"
                  x2="31.9"
                  y2="40.3"
                />
                <g>
                  <line
                    className="snowflake-path big-path"
                    x1="37.5"
                    y1={38}
                    x2="32.9"
                    y2="42.6"
                  />
                  <line
                    className="snowflake-path big-path"
                    x1="37.5"
                    y1="42.6"
                    x2="32.9"
                    y2={38}
                  />
                </g>
              </g>
              <g className="snowflake">
                <line
                  className="snowflake-path big-path"
                  x1="48.3"
                  y1={37}
                  x2="48.3"
                  y2="43.5"
                />
                <line
                  className="snowflake-path big-path"
                  x1="51.6"
                  y1="40.3"
                  x2={45}
                  y2="40.3"
                />
                <g>
                  <line
                    className="snowflake-path big-path"
                    x1="50.6"
                    y1={38}
                    x2={46}
                    y2="42.6"
                  />
                  <line
                    className="snowflake-path big-path"
                    x1="50.6"
                    y1="42.6"
                    x2={46}
                    y2={38}
                  />
                </g>
              </g>
              <g className="snowflake">
                <line
                  className="snowflake-path big-path"
                  x1="60.5"
                  y1={37}
                  x2="60.5"
                  y2="43.5"
                />
                <line
                  className="snowflake-path big-path"
                  x1="63.7"
                  y1="40.3"
                  x2="57.2"
                  y2="40.3"
                />
                <g>
                  <line
                    className="snowflake-path big-path"
                    x1="62.8"
                    y1={38}
                    x2="58.2"
                    y2="42.6"
                  />
                  <line
                    className="snowflake-path big-path"
                    x1="62.8"
                    y1="42.6"
                    x2="58.2"
                    y2={38}
                  />
                </g>
              </g>
              <g className="snowflake">
                <line
                  className="snowflake-path big-path"
                  x1="10.3"
                  y1={37}
                  x2="10.3"
                  y2="43.5"
                />
                <line
                  className="snowflake-path big-path"
                  x1="13.5"
                  y1="40.3"
                  x2={7}
                  y2="40.3"
                />
                <g>
                  <line
                    className="snowflake-path big-path"
                    x1="12.6"
                    y1={38}
                    x2={8}
                    y2="42.6"
                  />
                  <line
                    className="snowflake-path big-path"
                    x1="12.6"
                    y1="42.6"
                    x2={8}
                    y2={38}
                  />
                </g>
              </g>
              <g className="snowflake">
                <line
                  className="snowflake-path big-path"
                  x1="22.7"
                  y1={37}
                  x2="22.7"
                  y2="43.5"
                />
                <line
                  className="snowflake-path big-path"
                  x1="25.9"
                  y1="40.3"
                  x2="19.4"
                  y2="40.3"
                />
                <g>
                  <line
                    className="snowflake-path big-path"
                    x1={25}
                    y1={38}
                    x2="20.4"
                    y2="42.6"
                  />
                  <line
                    className="snowflake-path big-path"
                    x1={25}
                    y1="42.6"
                    x2="20.4"
                    y2={38}
                  />
                </g>
              </g>
              <g className="snowflake">
                <line
                  className="snowflake-path big-path"
                  x1="35.2"
                  y1={37}
                  x2="35.2"
                  y2="43.5"
                />
                <line
                  className="snowflake-path big-path"
                  x1="38.4"
                  y1="40.3"
                  x2="31.9"
                  y2="40.3"
                />
                <g>
                  <line
                    className="snowflake-path big-path"
                    x1="37.5"
                    y1={38}
                    x2="32.9"
                    y2="42.6"
                  />
                  <line
                    className="snowflake-path big-path"
                    x1="37.5"
                    y1="42.6"
                    x2="32.9"
                    y2={38}
                  />
                </g>
              </g>
              <g className="snowflake">
                <line
                  className="snowflake-path big-path"
                  x1="48.3"
                  y1={37}
                  x2="48.3"
                  y2="43.5"
                />
                <line
                  className="snowflake-path big-path"
                  x1="51.6"
                  y1="40.3"
                  x2={45}
                  y2="40.3"
                />
                <g>
                  <line
                    className="snowflake-path big-path"
                    x1="50.6"
                    y1={38}
                    x2={46}
                    y2="42.6"
                  />
                  <line
                    className="snowflake-path big-path"
                    x1="50.6"
                    y1="42.6"
                    x2={46}
                    y2={38}
                  />
                </g>
              </g>
              <g className="snowflake">
                <line
                  className="snowflake-path big-path"
                  x1="60.5"
                  y1={37}
                  x2="60.5"
                  y2="43.5"
                />
                <line
                  className="snowflake-path big-path"
                  x1="63.7"
                  y1="40.3"
                  x2="57.2"
                  y2="40.3"
                />
                <g>
                  <line
                    className="snowflake-path big-path"
                    x1="62.8"
                    y1={38}
                    x2="58.2"
                    y2="42.6"
                  />
                  <line
                    className="snowflake-path big-path"
                    x1="62.8"
                    y1="42.6"
                    x2="58.2"
                    y2={38}
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      );
    } else if (dis === 'haze') {
      return (
        <div className="svg-contain">
          <svg
            className="fog-svg"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 68 52.6"
            style={{ enableBackground: 'new 0 0 68 52.6' }}
            xmlSpace="preserve"
          >
            <g id="Layer_1">
              <g>
                <path
                  className="cloud st3"
                  d="M62.8,29.3c0-5.2-4.2-9.4-9.4-9.4c-0.2,0-0.4,0.1-0.7,0.1c-0.1-0.9-0.2-1.8-0.5-2.7c-0.3-1.1-0.9-2.2-1.5-3.1
        C48.6,11,44.9,9,40.8,9c-2.5,0-4.8,0.7-6.7,2c-0.6,0.4-1.2,0.9-1.8,1.5c-0.3,0.3-0.5,0.6-0.8,0.8c-0.2,0.3-0.5,0.6-0.7,0.9
        c-1.9-1.3-4.2-2.1-6.7-2.1c-6,0-10.9,4.4-11.8,10.1c-3.8,1.1-6.7,4.3-7.2,8.3h28.7h13.9h14.1h0.8C62.7,30.6,62.8,30.1,62.8,29.3z"
                />
                <path className="fog-line big-path" d="M7.3,28.8h12.4" />
                <path className="fog-line big-path" d="M23.5,28.8h38.4" />
                <path className="fog-line big-path" d="M57.3,32.6h5.2" />
                <path className="fog-line big-path" d="M31.2,32.6h22.1" />
                <path className="fog-line big-path" d="M6.2,32.6h21.1" />
                <path className="fog-line big-path" d="M11.4,43.6H6.2" />
                <path className="fog-line big-path" d="M37.5,43.6H15.4" />
                <path className="fog-line big-path" d="M62.5,43.6H41.4" />
                <path className="fog-line big-path" d="M6.2,36.4h2.1" />
                <path className="fog-line big-path" d="M11.9,36.4h6" />
                <path className="fog-line big-path" d="M21.8,36.4h20.4" />
                <path className="fog-line big-path" d="M46.3,36.4h16.1" />
                <path className="fog-line big-path" d="M55.2,40.2h7.3" />
                <path className="fog-line big-path" d="M48.3,40.2h2.8" />
                <path className="fog-line big-path" d="M37.3,40.2H44" />
                <path className="fog-line big-path" d="M18.3,40.2h15.3" />
                <path className="fog-line big-path" d="M6.2,40.2h8" />
              </g>
            </g>
          </svg>
        </div>
      );
    }
  };

  return (
    <div className="card text-center col-md-2 m-auto">
      <div className="form-control my-3">
        <input
          value={search}
          type="search"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={getLocationHandler}
        />
      </div>
      {!city ? (
        <p>No deta Found</p>
      ) : (
        <div>
          <h5 className="card-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={60}
              height={60}
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
              {...props}
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z" />
            </svg>
            {search} : City Weather
          </h5>
          <div className="alert alert-primary my-3">
            <h1>{city.temp}°C</h1>
          </div>
          <div className="card-body align-center">
            <p className="card-text">
              Min :{dis} {city.temp_min} Cel | Max: {city.temp_max} Cel
            </p>
          </div>
          <div className="weather-container"></div>
        </div>
      )}
    </div>
  );
};
export default Card;
