import styled from "styled-components";

export default function Entry(props) {
    const {date, description, value, type} = props;
    const newValue = String((value/100).toFixed(2)).replace(".",",");
    return (
        <EntryWrapper Type={type}>
            <span>
                <span>{date}</span>
                <span>{description}</span>
            </span>
            <span>{newValue}</span>
        </EntryWrapper>
    );
}

const EntryWrapper = styled.li`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    & > span:first-child {
        
        span:first-child {
            color: #C6C6C6;
            margin-right: 10px;
        }
    }

    & > span:last-child {
        color: ${props => props.Type === "deposit"
                                ? "#03AC00"
                                : "#C70000"
                };
    }
`;