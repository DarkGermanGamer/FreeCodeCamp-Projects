def adjacency_list_to_matrix(adj_list):
    n = len(adj_list)
    adj_matrix = []

    for node_no, current in adj_list.items():
        row = []

        for node in range(n):
            if node in current:
                row.append(1)
            else:
                row.append(0)

        adj_matrix.append(row)

    print("\n".join([str(row) for row in adj_matrix]))
    return adj_matrix