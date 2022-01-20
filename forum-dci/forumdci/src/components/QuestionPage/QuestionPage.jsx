import React, {useState} from 'react';
import TextEditor from "./TextEditor.jsx"
 import ComponentButton from "./ComponentButton";


function QuestionPage() {

    const [showAnswerArea, setShowAnswerArea] = useState(false);

    const switchMode = () => {
        setShowAnswerArea((showMe) => !showMe)
    }

    return (
        <>

            <div className="container mx-auto min-h-screen">
                <div className="bg-indigo-50 ">
                    <h4 className="font-bold px-6 py-6">How to get random number in solana on-chain program?</h4>

                    <ul className=" flex  px-6 py-4 ">
                        <li className="mr-4">asked today</li>
                        <li className="mr-4">active today</li>
                        <li className="mr-4">viewed 5 times</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold px-6 py-6">Description</h4>
                    <p className="px-6 py-6"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum eaque est explicabo magnam maxime minus provident. Amet asperiores, quo? Aliquam aperiam dolorum eveniet explicabo odit optio quod sed voluptatem.</span><span>Accusamus deserunt enim iure laborum nihil pariatur repellat vel? Accusantium alias fugiat illum, incidunt nemo perferendis quam sit. Aliquam architecto aspernatur commodi cupiditate dolore excepturi facilis quibusdam reiciendis rem voluptates.</span><span>Alias, eaque in laboriosam nisi possimus quis repellat veniam vero voluptate voluptatibus. Accusantium amet assumenda dignissimos eos harum maiores odit quam quas, repellendus repudiandae sint, suscipit, tempore veritatis. Neque, veritatis?</span><span>A distinctio eos est impedit iusto molestias, neque possimus praesentium ut, vel veniam, voluptatum. Consectetur corporis illum nam non quas, reiciendis sit soluta veniam. Explicabo mollitia quia quos. Ad, modi?</span><span>Ad animi cumque distinctio doloribus esse expedita fuga in maiores odio reiciendis rerum saepe, soluta sunt tempora totam vero voluptatum! Assumenda delectus in libero minima molestias reprehenderit vel velit vitae!</span>
                    </p>
                </div>

                <ul className=" flex  px-6 py-4 ">
                    <li className="mr-4 px-2  bg-gray-50 rounded">javascript</li>
                    <li className="mr-4 px-2 bg-gray-50 rounded">promise</li>
                    <li className="mr-4 px-2 bg-gray-50 rounded">program</li>
                </ul>
                <div className="text-center">
                    <ComponentButton onClick={switchMode} value={showAnswerArea ? "Hide Answer Form" : "Show Answer Form"}>
                    </ComponentButton>
                </div>

                <div className="">
                    {showAnswerArea ? <TextEditor/> : ''}
                </div>
            </div>
        </>
    );
}

export default QuestionPage;