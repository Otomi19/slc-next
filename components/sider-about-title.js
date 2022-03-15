
import PostSubTitle from "./post-sub-title";

export default function sidedAbout({ content, image, title }) {
    return (<>
        <div className="group grid grid-cols-3 hover:shadow-medium transition-shadow duration-200 rounded-10">
            {image && <div className="col-md-4 align-self-center w-auto">
                <img src={image} className="max-h-[250px] rounded-10 group-hover:scale-105 transition-transform duration-200" alt={title} />
            </div>}
            <div className="col-md-8 col-span-2 align-self-center w-auto justify-self-end pr-7 pl-10">
                <h2 className="text-2xl lg:text-3xl">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    </>);
}