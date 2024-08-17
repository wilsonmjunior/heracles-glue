import { useEffect, useState } from "react";

type RenderParams = {
  data: any;
  error: any;
  loading: boolean;
};

type DataListProps = {
  fetch(): Promise<void>;
  render(value: RenderParams): void;
};

export function DataList({ fetch, render }: DataListProps) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch();
        setData(response as any);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [fetch]);

  return render({ data, error, loading });
}
