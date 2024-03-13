import { Button } from "../components/button";
import { Card } from "../components/card";
import { IncrementProvider } from "../contexts/incrementContext";

export function App() {
  return(
    <IncrementProvider>
    <h1>Class 05 Contexts</h1>

    <Card/>
    <Button/>
    </IncrementProvider>
  )
}