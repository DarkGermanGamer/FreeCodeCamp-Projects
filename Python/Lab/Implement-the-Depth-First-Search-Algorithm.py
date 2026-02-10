def dfs(adj_matrix, node_label):
    stack = [node_label]
    visited = [False]*len(adj_matrix)
    reachable_nodes = [node_label]

    while stack:
        current = stack.pop()

        if not visited[current]:
            visited[current] = True
            
            for node_no, node in enumerate(adj_matrix[current]):
                if node == 1:
                    stack.append(node_no)

                    if not node_no in reachable_nodes:
                        reachable_nodes.append(node_no)

    return reachable_nodes