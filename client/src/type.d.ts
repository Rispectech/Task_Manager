interface taskType {
  _id: string;
  name: string;
  completed: boolean;
  __v?: number;
}

interface Props {
  task: taskType[];
  FetchData: () => void;
}

interface EditProps {
  FetchData: () => void;
}

interface error {
  error: boolean;
  msg: string;
}
