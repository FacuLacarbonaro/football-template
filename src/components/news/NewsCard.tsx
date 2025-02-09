type Props = {
  cardData: {
    id: number;
    title: string;
    imgURL: string;
    type: string;
    description: string;
    date: string;
  };
};

const NewsCard = ({ cardData }: Props) => {
  const { title, imgURL, type, description } = cardData;

  return (
    <div className="bg-red-600 rounded">
      <img src={imgURL} alt={title} className="w-full" />

      <div className="p-6">
        <h2 className="text-2xl py-2 text-white font-bold">{title}</h2>
        <div className="flex">
          <p className="mr-2 bg-gray-200 h-fit px-2 rounded-md font-medium">
            {type}
          </p>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
