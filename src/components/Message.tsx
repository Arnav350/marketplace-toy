type Props = {
  my: boolean;
  content: string;
};

function Message({ my, content }: Props) {
  return (
    <p
      style={{
        padding: 10,
        fontSize: 18,
        borderRadius: 16,
        marginBottom: 4,
        backgroundColor: my ? "#69afdc" : "#aaa",
        color: my ? "white" : "black",
      }}
    >
      {content}
    </p>
  );
}

export default Message;
