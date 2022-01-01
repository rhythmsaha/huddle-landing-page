import Card from "./Card";

const Featured = () => {
    return (
        <section className="space-y-10">
            <Card
                imageIsLast={true}
                img="/images/illustration-grow-together.svg"
                heading="Grow Together"
                text="Generate meaningful discussions with your audience and build
                    a strong, loyal community. Think of the insightful
                    conversations you miss out on with a feedback form"
            />

            <Card
                img="/images/illustration-flowing-conversation.svg"
                heading="Flowing Conversation"
                text="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow"
            />

            <Card
                imageIsLast={true}
                img="/images/illustration-your-users.svg"
                heading="Your Users"
                text="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
            />
        </section>
    );
};

export default Featured;
