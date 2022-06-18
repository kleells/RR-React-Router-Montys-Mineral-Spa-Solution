import Carousel from 'react-bootstrap/Carousel'

export default function Home () {
    return (
        <div className="homePage">
            <Carousel style={{padding: '16px'}}>
                <Carousel.Item>
                    <img width={600} height={400} alt="600x400" src="https://images.unsplash.com/photo-1567113463224-37cf03ba4577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5c3RhbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={600} height={400} alt="600x400" src="https://images.unsplash.com/photo-1532242004499-6a55d032136a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90c3ByaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" />
            </Carousel.Item>
            <Carousel.Item>
                <img width={600} height={400} alt="600x400" src="https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZGl0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" />
            </Carousel.Item>
            </Carousel>
        </div>
    )
}