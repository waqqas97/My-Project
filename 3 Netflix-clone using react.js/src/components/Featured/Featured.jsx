import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"

export default function Featured({ type }) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="ganre" id="genre">
                        <option>Ganre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src="https://www.tallengestore.com/cdn/shop/products/Jurassic_Park_-_Tallenge_Hollywood_Movie_Poster_Collection_745d5009-8298-4bf9-9efa-fd77fd18131a.jpg?v=1577693343"
                alt=""
            />
            <div className="info">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias distinctio repudiandae vitae unde id beatae fugit itaque temporibus quidem, a officiis optio fuga est voluptate. Suscipit perspiciatis tenetur illum!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
