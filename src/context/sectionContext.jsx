import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const SectionsContext = createContext();

export default function SectionsProvider({ children }) {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSections = useCallback(async () => {
    try {
      const res = await fetch("https://lauka.ovatech.es/api/sections");
      if (!res.ok) throw new Error("failed to fetch sections data");
      const data = await res.json();
      setSections(data);
    } catch (error) {
      setError(error);
    }
  }, []);

  const refreshAll = useCallback(async () => {
    setLoading(true);
    await fetchSections();
    setLoading(false);
  }, [fetchSections]);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  const categories = useMemo(() => {
    return sections.flatMap((section) => section.categories || []);
  }, [sections]);

  const products = useMemo(() => {
    return categories.flatMap((category) => category.products || []);
  }, [categories]);

  return (
    <SectionsContext.Provider
      value={{
        sections,
        categories,
        products,
        loading,
        error,
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
}
