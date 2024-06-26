import React from "react";
import { createEditor } from "slate";
import { Slate, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { initialValue } from "../constants/initial-value";
import { PhyllitePluginContainer } from "../types/phyllite-plugin";
import { PluginsContext } from "../hooks/use-plugins";

type Props = {
  children: React.ReactNode;
  plugins?: PhyllitePluginContainer;
  pluginsDisabled?: boolean;
};

export const Phyllite = ({ children, plugins, pluginsDisabled }: Props) => {
  const editor = React.useMemo(
    () => withHistory(withReact(createEditor())),
    [],
  );
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <PluginsContext.Provider
        value={{
          plugins: plugins || {},
          pluginsDisabled: pluginsDisabled || false,
        }}
      >
        {children}
      </PluginsContext.Provider>
    </Slate>
  );
};
