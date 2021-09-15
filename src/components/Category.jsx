import styled from "styled-components";

const Container = styled.div`
  background-color: var(--seashell);
  height: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10vh 0;
  position: relative;
  border-radius: 8px;
`;

const CategoryImage = styled.img`
  width: 180px;
  position: relative;
`;

export default function Category(props) {
  return (
    <Container>
      <CategoryImage
        src=".\assets\shared\desktop\image-category-thumbnail-headphones.png"
        alt=""
      />
      <p>{props.category}</p>
      <button>
        Shop
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </Container>
  );
}

Category.defaultProps = {
  category: "Headphones",
};
