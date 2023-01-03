import { lorem } from "@/utils/dummy";
import { usePageContext } from "@/utils/router";

const ChatsPage = () => {
  return (
    <div className="flex flex-col gap-1 h-full overflow-y-scroll">
      {Array(6)
        .fill(1)
        .map((_, i) => {
          return <ConversationItem key={i} unread={i < 2} />;
        })}
    </div>
  );
};

const ConversationItem: React.FC<{ unread: boolean }> = ({ unread }) => {
  const { setPage } = usePageContext();

  return (
    <button
      onClick={() => {
        setPage("convo");
      }}
      className="flex gap-3 py-2 border-b-mono-3 border-b"
    >
      <div
        className="relative rounded-full font-semibold min-w-[44px] min-h-[44px] bg-mono-3 text-white text-lg text-center"
        style={{ lineHeight: 2.5 }}
      >
        AR
        {unread && (
          <div className="w-2 h-2 bg-primary-1 absolute rounded-full bottom-1 left-1" />
        )}
      </div>
      <div className="overflow-hidden">
        <div className="font-semibold text-left">name</div>
        <div className="whitespace-nowrap text-mono-2 text-ellipsis overflow-hidden">
          {lorem.generateSentences(1)}
        </div>
      </div>
    </button>
  );
};

export default ChatsPage;
